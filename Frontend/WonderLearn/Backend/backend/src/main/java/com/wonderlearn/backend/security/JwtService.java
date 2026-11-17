package com.wonderlearn.backend.security;

import java.nio.charset.StandardCharsets;
import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.wonderlearn.backend.entity.User;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {

    private final SecretKey secretKey;
    private final long expirationMs;

    public JwtService(
            @Value("${app.jwt.secret}") String secret,
            @Value("${app.jwt.expiration-ms:86400000}") long expirationMs) {

        this.secretKey = Keys.hmacShaKeyFor(
                secret.getBytes(StandardCharsets.UTF_8));

        this.expirationMs = expirationMs;
    }

    // Generate JWT token
    public String generateToken(User user) {

        Date currentDate = new Date();

        Date expiryDate = new Date(
                currentDate.getTime() + expirationMs);

        return Jwts.builder()
                .subject(user.getEmail())
                .issuedAt(currentDate)
                .expiration(expiryDate)
                .signWith(secretKey)
                .compact();
    }

    // Extract email from token
    public String extractEmail(String token) {

        return Jwts.parser()
                .verifyWith(secretKey)
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getSubject();
    }

    // Validate token
    public boolean isTokenValid(String token, String email) {

        try {

            String tokenEmail = extractEmail(token);

            return tokenEmail.equals(email);

        } catch (JwtException | IllegalArgumentException e) {

            return false;
        }
    }
}