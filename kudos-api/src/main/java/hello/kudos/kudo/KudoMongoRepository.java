package hello.kudos.kudo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface KudoMongoRepository extends MongoRepository<Kudo, String>{

	@Query("{test:3}")
	public List<Kudo> findLastKudos();
}
