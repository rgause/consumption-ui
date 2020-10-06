package com.mycompany.myapp.service.impl;

import com.mycompany.myapp.service.ReportParameterService;
import com.mycompany.myapp.domain.ReportParameter;
import com.mycompany.myapp.repository.ReportParameterRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing {@link ReportParameter}.
 */
@Service
@Transactional
public class ReportParameterServiceImpl implements ReportParameterService {

    private final Logger log = LoggerFactory.getLogger(ReportParameterServiceImpl.class);

    private final ReportParameterRepository reportParameterRepository;

    public ReportParameterServiceImpl(ReportParameterRepository reportParameterRepository) {
        this.reportParameterRepository = reportParameterRepository;
    }

    @Override
    public ReportParameter save(ReportParameter reportParameter) {
        log.debug("Request to save ReportParameter : {}", reportParameter);
        return reportParameterRepository.save(reportParameter);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<ReportParameter> findAll(Pageable pageable) {
        log.debug("Request to get all ReportParameters");
        return reportParameterRepository.findAll(pageable);
    }


    @Override
    @Transactional(readOnly = true)
    public Optional<ReportParameter> findOne(Long id) {
        log.debug("Request to get ReportParameter : {}", id);
        return reportParameterRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete ReportParameter : {}", id);
        reportParameterRepository.deleteById(id);
    }
}
