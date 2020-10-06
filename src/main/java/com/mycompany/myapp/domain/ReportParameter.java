package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

/**
 * A ReportParameter.
 */
@Entity
@Table(name = "report_parameter")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class ReportParameter implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    
    @Column(name = "parameter_name", unique = true)
    private String parameterName;

    @ManyToOne
    @JsonIgnoreProperties(value = "reportParameters", allowSetters = true)
    private Report report;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getParameterName() {
        return parameterName;
    }

    public ReportParameter parameterName(String parameterName) {
        this.parameterName = parameterName;
        return this;
    }

    public void setParameterName(String parameterName) {
        this.parameterName = parameterName;
    }

    public Report getReport() {
        return report;
    }

    public ReportParameter report(Report report) {
        this.report = report;
        return this;
    }

    public void setReport(Report report) {
        this.report = report;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof ReportParameter)) {
            return false;
        }
        return id != null && id.equals(((ReportParameter) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "ReportParameter{" +
            "id=" + getId() +
            ", parameterName='" + getParameterName() + "'" +
            "}";
    }
}
