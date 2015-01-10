package hello;

import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;

import org.joda.time.LocalDateTime;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

	private final Logger log = LoggerFactory.getLogger(GreetingController.class);
	
    private static final String TEMPLATE = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @Value("${server.port}")
    private String test;
    
    @Inject
    private GreetingMongoRepository repository;
    
    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name, @RequestParam Map<String, String> parameters, HttpServletRequest request) {
    	System.out.println(test);
    	LocalDateTime timestamp = new LocalDateTime(2015,1,9,11,40,34);
        Greeting greeting = new Greeting(null,
                            String.format(TEMPLATE, name), timestamp);
        
        greeting = repository.save(greeting);
        
        log.debug(greeting.toString());
        log.debug(Long.toString(repository.count()));
        log.debug(repository.findByTimestamp(timestamp).toString());
        return greeting;
    }
}