package com.poc;

import java.io.File;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.poc.BaseDomainApplication.MessageStatus;
import com.poc.BaseDomainApplication.ModelType;
import com.poc.model.Debitur;
import com.poc.model.Individu;
import com.poc.model.online.Individual;
import com.poc.model.online.Kredit;
import com.poc.model.online.OnlineData;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class FeederService implements PbkProducer {
	@Autowired
	FeederProperties preperties;

	@Autowired
	FeederProperties properties;

	@Autowired
	DebiturRepository debiturRepository;

	@Autowired
	KreditRepository kreditRepository;

	@Autowired
	KafkaTemplate<String, PbkMessage> kafkaTemplate;

	@Autowired
	ObjectMapper objectMapper;

	@KafkaListener(topics = "${feeder.debitur-out-to-feeder-topic-name}", groupId = "${spring.kafka.consumer.group-id}")
	public void consume(PbkMessage event) {
		log.info(String.format("<- %s, %s", properties.getDebiturOutToFeederTopicName(), event.toString()));

		Individu individu = objectMapper.convertValue(event.getData(), Individu.class);
		try {
			ObjectMapper objectMapper = new ObjectMapper();
			File file = new File(properties.getOnlineDataLocation() + System.getProperty("file.separator")
					+ individu.getNomorIdentitas() + ".json");

			OnlineData onlineData = objectMapper.readValue(file, OnlineData.class);

			List<Individual> individuals = onlineData.getDebiturIndividuals();
			for (Individual i : individuals) {
				upsertDebitur(i);
			}

			List<Kredit> kredits = onlineData.getKredits();
			for (Kredit k : kredits) {
				upsertKredit(k);
				List<Kredit> histories = k.getHistories();
				for (Kredit h : histories) {
					upsertKredit(h);
				}
			}

			Optional<Debitur> debitur = debiturRepository
					.findFirst1ByNomorIdentitasOrderByTahunBulanDataDescCreateDateDesc(individu.getNomorIdentitas());
			if (debitur.isPresent()) {
				PbkMessage e = new PbkMessage();
				e.setData(debitur.get());
				e.setModelType(ModelType.DEBITUR);
				e.setStatus(MessageStatus.REQUEST);
				e.setUuid(event.getUuid());

				// base on debitur, get kredit
				sendMessage(e, properties.getFeederOutToKreditTopicName());
			}
		} catch (Exception e) {
			log.info(e.getMessage(), e);
		}

	}

	@Override
	public void sendMessage(com.poc.PbkMessage event, String topicName) {
		Message<PbkMessage> message = MessageBuilder.withPayload(event).setHeader(KafkaHeaders.TOPIC, topicName)
				.build();
		kafkaTemplate.send(message);
		log.info(String.format("-> %s, %s", topicName, event.toString()));
	}

	private void upsertDebitur(Individual i) {
		debiturRepository.upsert(i.getAlamat(), i.getAlamatEmail(), i.getAlamatTempatBekerja(), i.getCreateDate(),
				i.getJenisIdentitas(), i.getJenisKelamin(), i.getKecamatan(), i.getKelurahan(),
				i.getKodeBidangUsahaTempatKerja(), i.getKodeGolonganDebitur(), i.getKodeJenisPelapor(),
				i.getKodeKabupatenatauKota(), i.getKodeKantorCabang(), i.getKodeNegaraDomisili(), i.getKodePekerjaan(),
				i.getKodePelapor(), i.getKodePos(), i.getKodeStatusPendidikanatauGelarDebitur(),
				i.getNamaGadisIbuKandung(), i.getNamaLengkap(), i.getNamaSesuaiIdentitas(), i.getNomorCIFDebitur(),
				i.getNomorCIFLamaDebitur(), i.getNomorIdentitas(), i.getNomorTelepon(), i.getNomorTeleponSeluler(),
				i.getNpwp(), i.getOperasiData(), i.getStatusdelete(), i.getStatusPerkawinanDebitur(),
				i.getTanggalLahir(), i.getTempatBekerja(), i.getTempatLahir(), i.getUpdateDate(),
				i.getTahunBulanData());

	}

	private void upsertKredit(Kredit k) {
		kreditRepository.upsert(Util.parseBigDecimal(k.getBakiDebit()), k.getCreateDate(),
				Util.parseBigDecimal(k.getDenda()),
				Util.parseInteger(k.getFrekuensiPerpanjanganFasilitasKreditatauPembiayaan()),
				Util.parseInteger(k.getFrekuensiRestrukturisasi()), Util.parseInteger(k.getFrekuensiTunggakan()),
				k.getJenisSukuBungaatauImbalan(), Util.parseInteger(k.getJumlahHariTunggakan()), k.getKeterangan(),
				k.getKodeAkadKreditatauAkadPembiayaan(), k.getKodeCaraRestrukturisasi(), k.getKodeJenisFasilitas(),
				k.getKodeJenisKreditatauPembiayaan(), k.getKodeJenisPelapor(), k.getKodeJenisPenggunaan(),
				k.getKodeKabupatenatauKotaLokasiProyekatauPenggunaanKreditAtauPembiayaan(), k.getKodeKantorCabang(),
				k.getKodeKategoriDebitur(), k.getKodeKondisi(), k.getKodeKualitasKreditatauPembiayaan(),
				k.getKodeOrientasiPenggunaan(), k.getKodePelapor(), k.getKodeSebabMacet(), k.getKodeSektorEkonomi(),
				k.getKodeSifatKreditatauPembiayaan(), k.getKodeValuta(), k.getKreditatauPembiayaanProgramPemerintah(),
				Util.parseBigDecimal(k.getNilaiDalamMataUangAsal()), Util.parseBigDecimal(k.getNilaiProyek()),
				k.getNomorAkadAkhir(), k.getNomorAkadAwal(), k.getNomorCIFDebitur(), k.getNomorRekeningFasilitas(),
				k.getNomorRekeningLamaFasilitas(), k.getOperasiData(), Util.parseBigDecimal(k.getPlafon()),
				Util.parseBigDecimal(k.getPlafonAwal()),
				Util.parseBigDecimal(k.getRealisasiatauPencairanBulanBerjalan()), k.getStatusdelete(),
				Util.parseFloat(k.getSukuBungaatauImbalan()), k.getTanggalAkadAkhir().replace("-", ""),
				k.getTanggalAkadAwal().replace("-", ""), k.getTanggalAwalKreditatauPembiayaan().replace("-", ""),
				k.getTanggalJatuhTempo().replace("-", ""), k.getTanggalKondisi().replace("-", ""),
				k.getTanggalMacet().replace("-", ""), k.getTanggalMulai().replace("-", ""),
				k.getTanggalRestrukturisasiAkhir().replace("-", ""), k.getTanggalRestrukturisasiAwal().replace("-", ""),
				Util.parseBigDecimal(k.getTunggakanBungaatauImbalan()), Util.parseBigDecimal(k.getTunggakanPokok()),
				k.getUpdateDate(), k.getTahunBulanData());

	}

}
