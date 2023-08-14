package com.poc;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;

import com.poc.model.Individu;

/**
 * reference: 
 * https://refactorfirst.com/spring-boot-with-redis-stack-and-redis-insight
 * https://redis.io/docs/getting-started/install-stack/docker/
 * 
 *  
 * @author Lenovo
 *
 */
@Configuration
public class RedisConfig {

	@Bean
	public RedisTemplate<String, Individu> baseDomainRedisTemplate(RedisConnectionFactory connectionFactory) {
		RedisTemplate<String, Individu> template = new RedisTemplate<>();
		template.setConnectionFactory(connectionFactory);

		// Add some specific configuration here. Key serializers, etc.
		return template;
	}
}
