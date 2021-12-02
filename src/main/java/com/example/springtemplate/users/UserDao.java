package com.example.springtemplate.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserDao {
    @Autowired
    UserRepository userRepository;

    @GetMapping("/orm/users/create/{fn}/{ln}/{un}/{pw}")
    public User createUser(
            @PathVariable("fn") String first,
            @PathVariable("ln") String last,
            @PathVariable("un") String uname,
            @PathVariable("pw") String pass) {
        User user = new User(first, last, uname, pass, null);
        return userRepository.save(user);
    }


    @GetMapping("/orm/users/find")
    public List<User> findAllUsers() {
        return (List<User>) userRepository.findAll();
    }

    @GetMapping("/orm/users/find/id/{userId}")
    public User findUserById(
            @PathVariable("userId") Integer id) {
        return userRepository.findById(id).get();
    }

    @GetMapping("/orm/users/delete/{userId}")
    public void deleteUser(
            @PathVariable("userId") Integer id) {
        userRepository.deleteById(id);
    }

    @GetMapping("/orm/users/update/{userId}/{password}")
    public User updateUser(
            @PathVariable("userId") Integer id,
            @PathVariable("password") String newPass) {
        User user = userRepository.findById(id).get();
        user.setPassword(newPass);
        return userRepository.save(user);
    }

}
