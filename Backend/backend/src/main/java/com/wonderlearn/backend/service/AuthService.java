package com.wonderlearn.backend.service;

import java.util.Locale;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import com.wonderlearn.backend.dto.request.LoginRequest;
import com.wonderlearn.backend.dto.request.RegisterRequest;
import com.wonderlearn.backend.dto.response.LoginResponse;
import com.wonderlearn.backend.entity.User;
import com.wonderlearn.backend.enums.Role;
import com.wonderlearn.backend.repository.UserRepository;
import com.wonderlearn.backend.security.JwtService;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    // Register new parent
    @Transactional
    public LoginResponse register(RegisterRequest request) {

        String email = request.getEmail()
                .trim()
                .toLowerCase(Locale.ROOT);

        if (userRepository.existsByEmail(email)) {

            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "Email is already registered"
            );
        }

        User user = new User();

        user.setFullName(request.getFullName().trim());
        user.setEmail(email);

        user.setPassword(
                passwordEncoder.encode(request.getPassword()));

        // Registration creates parent accounts only
        user.setRole(Role.PARENT);

        User savedUser = userRepository.save(user);

        String token = jwtService.generateToken(savedUser);

        return createLoginResponse(savedUser, token);
    }

    // Login existing user
    public LoginResponse login(LoginRequest request) {

        String email = request.getEmail()
                .trim()
                .toLowerCase(Locale.ROOT);

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.UNAUTHORIZED,
                        "Invalid email or password"
                ));

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {

            throw new ResponseStatusException(
                    HttpStatus.UNAUTHORIZED,
                    "Invalid email or password"
            );
        }

        String token = jwtService.generateToken(user);

        return createLoginResponse(user, token);
    }

    // Create response
    private LoginResponse createLoginResponse(
            User user,
            String token) {

        return new LoginResponse(
                token,
                user.getId(),
                user.getFullName(),
                user.getEmail(),
                user.getRole().name()
        );
    }
}