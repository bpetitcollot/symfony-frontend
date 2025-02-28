import React from "react";

export default function Hello({name}: {name: string}){
  return React.createElement('p', null,`Hello ${name} ! This is plain Javascript.`);
}