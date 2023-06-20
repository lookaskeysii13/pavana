<?php

namespace App\DAO;

use App\DTO\DTOService;
use Illuminate\Support\Facades\DB;

class DAOService {

    public function GetServices(){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "SELECT * FROM services_tbl WHERE deleted_at IS NULL"
            )
        );

        return $this->TransferData($data);
    }

    public function ShowService($ServiceID){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "SELECT * FROM services_tbl WHERE ServiceID = '$ServiceID'"
            )
        );

        return $this->TransferData($data);
    }

    public function GetServiceId(){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "SELECT count(*) AS ID FROM services_tbl"
            )
        );

        return $this->TransferData($data);
    }

    public function AddService($ServiceId,$ServiceName,$ServicePrice,$ServiceDescription,$ImageName,$Duration){
        DB::connection('mysql')->select(
            DB::raw(
                "CALL `InsertService`('$ServiceId','$ServiceName','$ServicePrice','$ServiceDescription','$ImageName','$Duration')"
            )
        );
    }

    public function UpdateService($ServiceId,$ServiceName,$ServicePrice,$ServiceDescription,$ImageName,$Duration){
        DB::connection('mysql')->select(
            DB::raw(
                "CALL `UpdateService`('$ServiceId','$ServiceName','$ServicePrice','$ServiceDescription','$ImageName','$Duration')"
            )
        );
    }

    public function TransferData($data){
        $data_service = new DTOService();
        $data_service->setService_data($data);
        return $data_service->getService_data();
    }

}