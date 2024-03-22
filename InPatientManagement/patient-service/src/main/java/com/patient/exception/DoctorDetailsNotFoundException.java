package com.patient.exception;

public class DoctorDetailsNotFoundException extends RuntimeException {
	public DoctorDetailsNotFoundException() {
		super();
	}

	public DoctorDetailsNotFoundException(String message) {
		super(message);
	}

}
