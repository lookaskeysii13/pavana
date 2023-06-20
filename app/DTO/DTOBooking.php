<?php

namespace App\DTO;

class DTOBooking {

    public $booking_data;



    /**
     * Get the value of booking_data
     */ 
    public function getBooking_data()
    {
        return $this->booking_data;
    }

    /**
     * Set the value of booking_data
     *
     * @return  self
     */ 
    public function setBooking_data($booking_data)
    {
        $this->booking_data = $booking_data;

        return $this;
    }
}