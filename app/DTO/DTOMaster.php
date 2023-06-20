<?php

namespace App\DTO;

class DTOMaster {
    public $master_data;

    /**
     * Get the value of master_data
     */ 
    public function getMaster_data()
    {
        return $this->master_data;
    }

    /**
     * Set the value of master_data
     *
     * @return  self
     */ 
    public function setMaster_data($master_data)
    {
        $this->master_data = $master_data;

        return $this;
    }
}