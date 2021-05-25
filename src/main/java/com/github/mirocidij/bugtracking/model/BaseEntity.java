package com.github.mirocidij.bugtracking.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@MappedSuperclass
@EqualsAndHashCode(of = "id")
public class BaseEntity<T extends Serializable> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private T id;

    @CreatedDate
    @Column(name = "created_datetime")
    private Date createdDateTime;

    @LastModifiedDate
    @Column(name = "updated_datetime")
    private Date updateDateTime;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;

}
