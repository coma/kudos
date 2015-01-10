package hello.kudos.activity;

import java.io.Serializable;

import org.apache.commons.lang3.builder.ReflectionToStringBuilder;
import org.springframework.data.annotation.Id;

public class Activity implements Serializable{
		
	private static final long serialVersionUID = 1L;
	
	@Id
    private String nick;
    private String name;
    private int kudosIn = 0;
    private int kudosOut = 0;
    
    public Activity(){
    	
    }
    
	public Activity(String nick, String name, int kudosIn, int kudosOut) {
		super();
		this.nick = nick;
		this.name = name;
		this.kudosIn = kudosIn;
		this.kudosOut = kudosOut;
	}
	public String getNick() {
		return nick;
	}
	public void setNick(String nick) {
		this.nick = nick;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getKudosIn() {
		return kudosIn;
	}
	public void setKudosIn(int kudosIn) {
		this.kudosIn = kudosIn;
	}
	public int getKudosOut() {
		return kudosOut;
	}
	public void setKudosOut(int kudosOut) {
		this.kudosOut = kudosOut;
	}
    
	public String toString(){
		return ReflectionToStringBuilder.toString(this);
	}
}
