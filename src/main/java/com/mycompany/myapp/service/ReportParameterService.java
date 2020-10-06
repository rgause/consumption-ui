package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.ReportParameter;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing {@link ReportParameter}.
 */
public interface ReportParameterService {

    /**
     * Save a reportParameter.
     *
     * @param reportParameter the entity to save.
     * @return the persisted entity.
     */
    ReportParameter save(ReportParameter reportParameter);

    /**
     * Get all the reportParameters.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<ReportParameter> findAll(Pageable pageable);


    /**
     * Get the "id" reportParameter.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<ReportParameter> findOne(Long id);

    /**
     * Delete the "id" reportParameter.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
