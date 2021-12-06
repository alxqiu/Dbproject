package com.example.springtemplate.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserDao {
    @Autowired
    UserRepository userRepository;

//    @GetMapping("/orm/users/create/{fn}/{ln}/{un}/{pw}/{rl}/{em}/{dob}")
//    public User createUser(
//            @PathVariable("fn") String first,
//            @PathVariable("ln") String last,
//            @PathVariable("un") String uname,
//            @PathVariable("pw") String pass,
//            @PathVariable("rl") String role,
//            @PathVariable("em") String email,
//            @PathVariable("dob") Date dateofbirth) {
//        User user = new User(first, last, uname, pass, role, email);
//        user.setDateOfBirth(dateofbirth);
//        return userRepository.save(user);
//    }

    @PostMapping("/orm/users/create")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    
    @GetMapping("/orm/users/find")
    public List<User> findAllUsers() {
        return (List<User>) userRepository.findAll();
    }

    @GetMapping("/orm/users/find/{userId}")
    public User findUserById(
            @PathVariable("userId") Integer id) {
        return userRepository.findById(id).get();
    }

    @GetMapping("/orm/users/delete/{userId}")
    public void deleteUser(
            @PathVariable("userId") Integer id) {
        userRepository.deleteById(id);
    }

    @PutMapping("/orm/users/{userId}")
    public User updateUser(
            @PathVariable("userId") Integer id,
            @RequestBody User userUpdates) {
        User user = userRepository.findById(id).get();
        user.setFirstName(userUpdates.getFirstName());
        user.setLastName(userUpdates.getLastName());
        user.setUsername(userUpdates.getUsername());
        user.setPassword(userUpdates.getPassword());
        user.setRole(userUpdates.getRole());
        user.setEmail(userUpdates.getEmail());
        user.setDateOfBirth(userUpdates.getDateOfBirth());
        return userRepository.save(user);
    }
}
