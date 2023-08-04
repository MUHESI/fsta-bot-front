module.exports = {
role:[
{
filter:/\.ts$/,
regex:/(?:FIXE|TODO)/i,
message:'You have tasks no finished'
nonBlocking:true
},
{
regex:/do not commit/i,
message:'you have taks wich have not commited',
}
]
}
