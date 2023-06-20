<?php

namespace App\DTO;

class DTOImage {
    public $id;
    public $filename;
    public $path;
    public $locationId;
    public $ImageLocID;
    public $ImageLocName;
    public $ImageName;

    /**
     * Get the value of id
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */ 
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of filename
     */ 
    public function getFilename()
    {
        return $this->filename;
    }

    /**
     * Set the value of filename
     *
     * @return  self
     */ 
    public function setFilename($filename)
    {
        $this->filename = $filename;

        return $this;
    }

    /**
     * Get the value of path
     */ 
    public function getPath()
    {
        return $this->path;
    }

    /**
     * Set the value of path
     *
     * @return  self
     */ 
    public function setPath($path)
    {
        $this->path = $path;

        return $this;
    }

    /**
     * Get the value of locationId
     */ 
    public function getLocationId()
    {
        return $this->locationId;
    }

    /**
     * Set the value of locationId
     *
     * @return  self
     */ 
    public function setLocationId($locationId)
    {
        $this->locationId = $locationId;

        return $this;
    }

    /**
     * Get the value of ImageLocID
     */ 
    public function getImageLocID()
    {
        return $this->ImageLocID;
    }

    /**
     * Set the value of ImageLocID
     *
     * @return  self
     */ 
    public function setImageLocID($ImageLocID)
    {
        $this->ImageLocID = $ImageLocID;

        return $this;
    }

    /**
     * Get the value of ImageLocName
     */ 
    public function getImageLocName()
    {
        return $this->ImageLocName;
    }

    /**
     * Set the value of ImageLocName
     *
     * @return  self
     */ 
    public function setImageLocName($ImageLocName)
    {
        $this->ImageLocName = $ImageLocName;

        return $this;
    }

    /**
     * Get the value of ImageName
     */ 
    public function getImageName()
    {
        return $this->ImageName;
    }

    /**
     * Set the value of ImageName
     *
     * @return  self
     */ 
    public function setImageName($ImageName)
    {
        $this->ImageName = $ImageName;

        return $this;
    }
}