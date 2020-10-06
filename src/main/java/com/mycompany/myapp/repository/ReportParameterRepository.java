package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.ReportParameter;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the ReportParameter entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ReportParameterRepository extends JpaRepository<ReportParameter, Long> {
}
