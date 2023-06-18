package com.baruto.baruto.auth.handler;

import com.baruto.baruto.auth.utils.ErrorResponder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
// SignatureException, ExpiredJwtException 등 아예 인증에 실패한 경우(즉, SecurityContext에 Authentication이 저장되지 않은 경우)
// 호출되는 핸들러 같은 역할을 한다.
public class MemberAuthenticationEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        Exception exception = (Exception) request.getAttribute("exception");
        ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED);

        logExceptionMessage(authException, exception);
    }

    private void logExceptionMessage(AuthenticationException authException, Exception exception) {
        // 여기 코드에서 언제 exception이 null인지 분석해보기!!
        String message = exception != null ? exception.getMessage() : authException.getMessage();
        log.warn("Unauthorized error happened: {}", message);
    }
}
