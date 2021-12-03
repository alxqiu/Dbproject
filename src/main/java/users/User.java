package main.java.users;

import main.java.Role;
import main.java.orders.Order;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.sql.Date;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String role;
    private String email;
    private Date dateOfBirth;

    @OneToMany(mappedBy = "orderedBy")
    @JsonIgnore
    private List<Order> orders;

    public List<Order> getOrders() { return orders; }
    public void setOrders(List<Order> orders) { this.orders = orders; }

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public Date getDateOfBirth() { return dateOfBirth; }
    public void setDateOfBirth(Date dateOfBirth) { this.dateOfBirth = dateOfBirth; }

    public User(String username, String password, String first_name, String last_name, String role) {
        this.username = username;
        this.password = password;
        this.firstName = first_name;
        this.lastName = last_name;
        this.role = role;
        this.email = "abc@mail.com";
        this.dateOfBirth = new Date(1);
    }

    public User() {}
}
