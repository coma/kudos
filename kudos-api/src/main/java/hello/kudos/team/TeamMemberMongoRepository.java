package hello.kudos.team;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TeamMemberMongoRepository extends MongoRepository<TeamMember, String>{

	public List<TeamMember> findByNick(String nick );
}
