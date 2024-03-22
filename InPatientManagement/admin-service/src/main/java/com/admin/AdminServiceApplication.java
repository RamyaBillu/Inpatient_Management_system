package com.admin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication // (exclude={DataSourceAutoConfiguration.class})

public class AdminServiceApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(AdminServiceApplication.class, args);
	}

}
