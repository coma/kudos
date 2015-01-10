package hello.kudos.kudo;

import hello.kudos.team.TeamMember;
import hello.kudos.team.TeamMemberMongoRepository;

import java.util.Calendar;
import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
    public ResponseEntity<Kudo> insert(@RequestBody Kudo kudo, @RequestHeader("Nick") String nick){
    	log.debug(String.format("%s is giving a kudo: %s", nick, kudo));
    	TeamMember memberFrom = teamRepository.findOne(nick);
    	TeamMember memberTo = teamRepository.findOne(kudo.getMemberTo().getNick());
    	
    	kudo.setMemberFrom(memberFrom);
    	kudo.setMemberTo(memberTo);
    	kudo.setTimestamp(Calendar.getInstance().getTimeInMillis());
    	
    	kudoRepository.save(kudo);
    	
    	memberTo.incrementKudoIn();
    	teamRepository.save(memberTo);
    	
    	memberFrom.incrementKudoOut();
    	teamRepository.save(memberFrom);
    	
    	return new ResponseEntity<Kudo>(kudo, HttpStatus.CREATED);
    }
    
    @RequestMapping(value="/kudo/from", method=RequestMethod.GET)
    public List<Kudo> getKudosFromMember(@RequestParam String nick){
    	log.debug("Obtaining kudos from " + nick);
    	List<Kudo> kudos = kudoRepository.findByMemberFrom(nick);
    	log.debug(kudos.toString());
    	return kudos;
    }
    
    @RequestMapping(value="/kudo/to", method=RequestMethod.GET)
    public List<Kudo> getKudosToMember(@RequestParam String nick){
    	log.debug("Obtaining kudos of " + nick);
    	List<Kudo> kudos = kudoRepository.findByMemberTo(nick);
    	log.debug(kudos.toString());
    	return kudos;
    }
    
    @RequestMapping(value="/kudo", method=RequestMethod.GET)
    public List<Kudo> getLastKudos(){
    	return kudoRepository.findAllByOrderByTimestampDesc();
    }
}