package hello.kudos.kudo;

import java.io.Serializable;

import org.apache.commons.lang3.builder.ReflectionToStringBuilder;
import org.joda.time.LocalDateTime;
import org.springframework.data.annotation.Id;

public class Kudo implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
    private String id;
    private String comment;
    private String memberFrom;
    private String memberTo;
    private LocalDateTime timestamp;
    
    public Kudo(){
    	
    }

	public Kudo(String comment, String memberFrom, String memberTo,
			LocalDateTime timestamp) {
		super();
		this.comment = comment;
		this.memberFrom = memberFrom;
		this.memberTo = memberTo;
		this.timestamp = timestamp;
	}

	public LocalDateTime getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(LocalDateTime timestamp) {
		this.timestamp = timestamp;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getMemberFrom() {
		return memberFrom;
	}

	public void setMemberFrom(String memberFrom) {
		this.memberFrom = memberFrom;
	}

	public String getMemberTo() {
		return memberTo;
	}

	public void setMemberTo(String memberTo) {
		this.memberTo = memberTo;
	}

	public String getId() {
		return id;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
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
		Kudo other = (Kudo) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
    
	public String toString(){
		return ReflectionToStringBuilder.toString(this);
	}
	
}
