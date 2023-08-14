package com.poc;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class Util {

	public static SimpleDateFormat yyyyMMdd = new SimpleDateFormat("yyyyMMdd");
	public static SimpleDateFormat yyyyMMddHHmmss = new SimpleDateFormat("yyyyMMddHHmmss");

	public static Date getDefaultLocalDate() {
		Calendar c = Calendar.getInstance();
		c.set(1970, Calendar.JANUARY, 1);
		return c.getTime();
	}

	public static Integer parseInteger(String value) {
		return Integer.parseInt(value.trim().equals("") ? "0" : value.trim());
	}

	public static BigDecimal parseBigDecimal(String value) {
		return BigDecimal.valueOf(Long.parseLong(value.trim().equals("") ? "0" : value.trim()));
	}

	public static Float parseFloat(String value) {
		return Float.parseFloat(value.trim().equals("") ? "0.0" : value.trim());
	}
	

	public static Date parseToyyyyMMdd(String value) {
		if (value.trim().equals("")) {
			return null;
		} else {
			try {
				return value.trim().equals("") ? null : yyyyMMdd.parse(value.trim().replace("-", ""));
			} catch (Exception e) {
				return null;
			}
		}
	}

	public static Date parseToyyyyMMddHHmmss(String value) {
		if (value.trim().equals("")) {
			return null;
		} else {
			try {
				return value.trim().equals("") ? null
						: yyyyMMddHHmmss.parse(value.trim().replace("-", "").replace(":", "").replace(" ", ""));
			} catch (Exception e) {
				return null;
			}
		}
	}
}
