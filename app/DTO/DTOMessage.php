<?php

namespace App\DTO;

class DTOMessage {

    public $message_data;

    /**
     * Get the value of message_data
     */ 
    public function getMessage_data()
    {
        return $this->message_data;
    }

    /**
     * Set the value of message_data
     *
     * @return  self
     */ 
    public function setMessage_data($message_data)
    {
        $this->message_data = $message_data;

        return $this;
    }
}