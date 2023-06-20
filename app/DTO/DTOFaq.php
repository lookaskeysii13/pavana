<?php

namespace App\DTO;

class DTOFaq {
    public $faq_data;

    /**
     * Get the value of faq_data
     */ 
    public function getFaq_data()
    {
        return $this->faq_data;
    }

    /**
     * Set the value of faq_data
     *
     * @return  self
     */ 
    public function setFaq_data($faq_data)
    {
        $this->faq_data = $faq_data;

        return $this;
    }
}