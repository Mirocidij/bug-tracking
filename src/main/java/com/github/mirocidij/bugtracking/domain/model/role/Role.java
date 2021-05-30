package com.github.mirocidij.bugtracking.domain.model.role;

import com.github.mirocidij.bugtracking.domain.model.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "roles")
@EqualsAndHashCode(callSuper = true)
public class Role extends BaseEntity<Long> {

    @Column(name = "name")
    private String name;

    @Override
    public String toString() {
        return "Role {" +
                "id: " + super.getId() + ", " +
                "name: " + name + " }";
    }

}
