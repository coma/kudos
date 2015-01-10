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
    
    public TeamMember(){
    	
    }
    
	public TeamMember(String nick, String name, int kudosIn, int kudosOut) {
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((nick == null) ? 0 : nick.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TeamMember other = (TeamMember) obj;
		if (nick == null) {
			if (other.nick != null)
				return false;
		} else if (!nick.equals(other.nick))
			return false;
		return true;
	}
	
}
