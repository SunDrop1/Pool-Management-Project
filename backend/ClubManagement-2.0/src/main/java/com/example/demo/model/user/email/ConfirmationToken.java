package com.example.demo.model.user.email;

import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

import com.example.demo.model.user.User;
import com.example.demo.model.user.UserRole;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@Entity
public class ConfirmationToken {
	@Id
	@SequenceGenerator(
			name = "confirmation_token_sequence",
			sequenceName = "confirmation_token_sequence",
			allocationSize = 1
			)
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "confirmation_token_sequence"
			)
	private Long id;
	@Column(nullable = false)
	private String token;
	@Column(nullable = false)
	private LocalDateTime createdAt;
	@Column(nullable = false)
	private LocalDateTime expiresAt;
	

	private LocalDateTime confirmedAt;
	public ConfirmationToken(String token, LocalDateTime createdAt, LocalDateTime expiredAt) {
		this.token = token;
		this.createdAt = createdAt;
		this.expiresAt = expiredAt;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	public LocalDateTime getExpiresAt() {
		return expiresAt;
	}
	public void setExpiresAt(LocalDateTime expiresAt) {
		this.expiresAt = expiresAt;
	}
	public LocalDateTime getConfirmedAt() {
		return confirmedAt;
	}
	public void setConfirmedAt(LocalDateTime confirmedAt) {
		this.confirmedAt = confirmedAt;
	}
}
