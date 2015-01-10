package hello.kudos.team;

import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/api")
public class TeamMemberController {

	private final Logger log = LoggerFactory.getLogger(TeamMemberController.class);
	
    @Inject
    private TeamMemberMongoRepository repository;
    
    @RequestMapping(value="/teammember/{nick}", method=RequestMethod.GET)
    public TeamMember getByNick(@PathVariable String nick) {
    	log.debug("Requesting team member: " + nick);
        TeamMember member = repository.findOne(nick);
        log.debug(member.toString());
        return member;
    }
    
    @RequestMapping(value="/teammember", method=RequestMethod.GET)
    public List<TeamMember> getAll(){
    	log.debug("Requesting all the team");
    	List<TeamMember> team = repository.findAll();
    	log.debug(team.toString());
    	return repository.findAll();
    }
    
    @RequestMapping(value="/teammember", method=RequestMethod.POST)
    public TeamMember insert(@RequestBody TeamMember member){
    	repository.save(member);
    	return member;
    }
}