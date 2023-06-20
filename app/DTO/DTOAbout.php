<?php

namespace App\DTO;

class DTOAbout {

    public $about_data;


    /**
     * Get the value of about_data
     */ 
    public function getAbout_data()
    {
        return $this->about_data;
    }

    /**
     * Set the value of about_data
     *
     * @return  self
     */ 
    public function setAbout_data($about_data)
    {
        $this->about_data = $about_data;

        return $this;
    }
}