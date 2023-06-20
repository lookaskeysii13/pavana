<?php

namespace App\Models;

use App\DAO\DAOService;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Psy\CodeCleaner\ReturnTypePass;

class ServiceModel extends Model
{
    public $service;

    public function __construct(){
        $this->service = new DAOService();
    }

    public function SelectFunction($request){
        if($request->Function == 'GETSERVICES'){
            return $this->service->GetServices();
        }elseif($request->Function == 'SHOWSERVICE'){
            return $this->service->ShowService($request->ServiceID);
        }
    }

    public function SelectTransactionFunction($request){
        $ServiceName = $request->input('data.ServiceName');
        $ServicePrice = $request->input('data.ServicePrice');
        $ServiceDescription = $request->input('data.ServiceDescription');
        $ImageName = $request->input('data.ImageName');
        $Duration = $request->input('data.Duration');

        if($request->input('Function') == 'ADDSERVICE'){
            $ServiceId = $this->service->GetServiceId();
            return $this->service->AddService(($ServiceId[0]->ID + 1),$ServiceName,$ServicePrice,$ServiceDescription,$ImageName,$Duration);
        }else{
            $ServiceId = $request->input('data.ServiceID');
            return $this->service->UpdateService($ServiceId,$ServiceName,$ServicePrice,$ServiceDescription,$ImageName,$Duration);
        }
    }
}
