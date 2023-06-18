package com.baruto.baruto.auth.handler;

import com.baruto.baruto.auth.utils.ErrorResponder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class MemberAuthenticationFailureHandler implements AuthenticationFailureHandler {
    @Override
    public void onAuthenticationFailure(HttpServletRequest request,
                                        HttpServletResponse response,
                                        AuthenticationException exception) throws IOException, ServletException {
        log.error("# Authentication failed: {}", exception.getMessage());
        ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED);
    }

    // 요거 ErrorResponder클래스의 sendErrorResponse랑 겹침!! 수정하기!!
//    private void sendErrorResponse(HttpServletResponse response) throws IOException {
//        Gson gson = new Gson();
//        ErrorResponse errorResponse = ErrorResponse.of(HttpStatus.UNAUTHORIZED);
//        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
//        response.setStatus(HttpStatus.UNAUTHORIZED.value());
//        response.getWriter().write(gson.toJson(errorResponse, ErrorResponse.class));
//    }
}
