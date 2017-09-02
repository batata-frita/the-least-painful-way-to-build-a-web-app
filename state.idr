data Status = AllRight | OnFire

setOnFire : Status
setOnFire = OnFire

callFireDepartmentIfOnFire : Status -> IO ()
callFireDepartmentIfOnFire x = ?callFireDepartmentIfOnFire_rhs
