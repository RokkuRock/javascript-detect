// File: SimpleXSS.java
import com.sun.net.httpserver.*;
import java.io.*;

public class SimpleXSS {
    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress(8000),0);
        server.createContext("/", exch -> {
            String msg = exch.getRequestURI().getQuery();
            String resp = "<html><body>Say: " + msg + "</body></html>"; // CWE-79
            exch.sendResponseHeaders(200, resp.length());
            exch.getResponseBody().write(resp.getBytes());
            exch.close();
        });
        server.start();
        System.out.println("Server at http://localhost:8000/?msg=Hello");
    }
}
