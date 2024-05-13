import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Approve from "./Approve";
import Input from "./Input";
import SafeCheck from "./SafeCheck";
import Logo from "./locklogo.png";
import Line from "./line.png";
import Text from "./text.png";
import abi from "./LockerABI";
import ERC20ABI from "./ERC20ABI";
import lockerAddress from "./Addresses";
import Web3 from "web3";
import "./App.css";

const Webpage = () => {
    const [account, setAcc] = useState("");
    const [networkCheck, setNetworkCheck] = useState("");

    const connectWalletTestnet = async () => {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) setAcc(accounts[0]);

        try {
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0xAA36A7" }], // Example chain ID
            });
        } catch (switchError) {
            if (switchError.code === 4902) {
                await window.ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [{
                        chainId: "0xAA36A7",
                        chainName: "Sepolia",
                        rpcUrls: ["https://rpc.sepolia.dev"],
                    }],
                });
            }
        }

        const networkId = await window.ethereum.request({ method: "net_version" });
        setNetworkCheck(networkId);
    };

    useEffect(() => {
        if (window.ethereum) {
            connectWalletTestnet();
        }
    }, []);

    let content;
    if (networkCheck === "11155111" && account) {
        content = (
            <div className="centered">
                Hello World
            </div>
        );
    } else {
        content = (
            <div className="centered">
                <button className="invisibleButton" onClick={connectWalletTestnet}>
                    <img className="metamaskButton" src="src/MetaMask_Fox.png" alt="" />
                </button>
            </div>
        );
    }

    return content;
};

export default Webpage;