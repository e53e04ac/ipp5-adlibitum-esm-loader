# ipp5-adlibitum-esm-loader

~~~~~ sh
npm install e53e04ac/ipp5-adlibitum-esm-loader
~~~~~

~~~~~ mjs
import { Ipp5AdlibitumEsmLoader } from 'e53e04ac/ipp5-adlibitum-esm-loader';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["e53e04ac/event-emitter"]);
  end;
  subgraph "devDependencies";
    B_1(["@types/node"]);
    B_2(["e53e04ac/hold"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  click B_0 "https://github.com/e53e04ac/event-emitter/tree/9a08c4203bfae12e94f36c9496c256c69fdd2277";
  click B_1 "https://www.npmjs.org/package/@types/node/v/18.14.0";
  click B_2 "https://github.com/e53e04ac/hold/tree/49707680ccdf4c5673f64ff0bab30f408269b328";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-adlibitum-esm-loader";
    E_0(["Ipp5AdlibitumEsmLoader"]);
  end;
  M(["index.mjs"])
  subgraph "event-emitter";
    I_0_0(["EventEmitter"]);
  end;
  M ----> I_0_0;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-adlibitum-esm-loader";
    E_0(["namespace Ipp5AdlibitumEsmLoader"]);
    E_1(["type Ipp5AdlibitumEsmLoader"]);
    E_2(["const Ipp5AdlibitumEsmLoader"]);
  end;
  M(["index.d.ts"])
  subgraph "event-emitter";
    I_0_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_1_0(["Get"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~
