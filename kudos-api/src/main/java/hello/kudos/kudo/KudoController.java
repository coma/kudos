package hello.kudos.kudo;

import hello.kudos.team.TeamMember;
import hello.kudos.team.TeamMemberMongoRepository;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/api")
public class KudoController {

	private final Logger log = LoggerFactory.getLogger(KudoController.class);
	
    @Inject
    private KudoMongoRepository kudoRepository;
    @Inject
    private TeamMemberMongoRepository teamRepository;
    
    @RequestMapping(value="/kudo", method=RequestMethod.POST)
    public Kudo insert(@RequestBody Kudo kudo){
    	kudoRepository.save(kudo);
    	TeamMember member = teamRepository.findOne(kudo.getMemberTo());
    	member.incrementKudoIn();
    	teamRepository.save(member);
    	return kudo;
    }
}