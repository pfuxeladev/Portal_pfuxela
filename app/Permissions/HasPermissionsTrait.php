<?php
namespace App\Permissions;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Auth;
trait HasPermissionsTrait {

    public function getAllPermissionsAttribute(array $permissions)
    {
        return $this->getAllPermissions($permissions);
    }

    public function getAllRolesAttributes(array $roles){
        return $this->getAllRoles($roles);
    }
    public function getCanAttribute()
    {
        $permissions = [];
        foreach (Permission::all() as $permission) {
            if (Auth::user()->can($permission->name)) {
                $permissions[$permission->name] = true;
            } else {
                $permissions[$permission->name] = false;
            }
        }
        return $permissions;
    }


}
