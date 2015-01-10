package hello;

import org.apache.commons.lang3.builder.ReflectionToStringBuilder;
import org.joda.time.LocalDateTime;

public class Greeting {

    private final String id;
    private final String content;
    private LocalDateTime timestamp;

    public Greeting(String id, String content, LocalDateTime timestamp) {
        this.id = id;
        this.content = content;
        this.timestamp = timestamp;
    }

    public String getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

	public LocalDateTime getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(LocalDateTime timestamp) {
		this.timestamp = timestamp;
	}
    
	public String toString(){
		return ReflectionToStringBuilder.toString(this);
	}
}
