package hello;

import java.util.List;

import org.joda.time.LocalDateTime;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GreetingMongoRepository extends MongoRepository<Greeting, String>{

	public List<Greeting> findByTimestamp(LocalDateTime timestamp);
}
