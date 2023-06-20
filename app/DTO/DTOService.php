<?php

namespace App\DTO;

class DTOService {

    public $service_data;

    /**
     * Get the value of service_data
     */ 
    public function getService_data()
    {
        return $this->service_data;
    }

    /**
     * Set the value of service_data
     *
     * @return  self
     */ 
    public function setService_data($service_data)
    {
        $this->service_data = $service_data;

        return $this;
    }
}