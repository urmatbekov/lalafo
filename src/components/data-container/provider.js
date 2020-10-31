import React from "react";

const obj = React.createContext()

const DataProvider = obj.Provider
const DataConsumer = obj.Consumer

export {DataProvider, DataConsumer}