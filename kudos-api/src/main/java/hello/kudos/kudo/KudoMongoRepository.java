package hello.kudos.kudo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface KudoMongoRepository extends MongoRepository<Kudo, String>{
	
	public List<Kudo> findAllByOrderByTimestampDesc();
	
	@Query("{'memberFrom._id':?0}")
	public List<Kudo> findByMemberFrom(String memberFrom);
	
	@Query("{'memberTo._id':?0}")
	public List<Kudo> findByMemberTo(String memberTo);
}
