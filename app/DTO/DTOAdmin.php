<?php

namespace App\DTO;

class DTOAdmin {
    public $admin_data;

    /**
     * Get the value of admin_data
     */ 
    public function getAdmin_data()
    {
        return $this->admin_data;
    }

    /**
     * Set the value of admin_data
     *
     * @return  self
     */ 
    public function setAdmin_data($admin_data)
    {
        $this->admin_data = $admin_data;

        return $this;
    }
}