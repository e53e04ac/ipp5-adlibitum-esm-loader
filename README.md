# ipp5-adlibitum-esm-loader

~~~~~ sh
npm install e53e04ac/ipp5-adlibitum-esm-loader
~~~~~

~~~~~ mjs
import { Ipp5AdlibitumEsmLoader } from 'ipp5-adlibitum-esm-loader';
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["event-emitter"]);
  end;
  subgraph "devDependencies";
    B_1(["@types/node"]);
    B_2(["hold"]);
  end;
  subgraph "github";
    C_0(["e53e04ac/event-emitter\n1c42c278687d626fd9dbc9da241e899e482bac0d"]);
    C_2(["e53e04ac/hold\nccd6d335b2be61f30045be782b2129d08a53ac67"]);
  end;
  subgraph "npmjs";
    C_1(["@types/node\n18.14.1"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  click C_0 "https://github.com/e53e04ac/event-emitter/tree/1c42c278687d626fd9dbc9da241e899e482bac0d";
  click C_1 "https://www.npmjs.com/package/@types/node/v/18.14.1";
  click C_2 "https://github.com/e53e04ac/hold/tree/ccd6d335b2be61f30045be782b2129d08a53ac67";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-adlibitum-esm-loader";
    E_0(["namespace Ipp5AdlibitumEsmLoader"]);
    E_1(["type Ipp5AdlibitumEsmLoader"]);
    E_2(["const Ipp5AdlibitumEsmLoader"]);
  end;
  M["index.d.ts"]
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

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-adlibitum-esm-loader";
    E_0(["Ipp5AdlibitumEsmLoader"]);
  end;
  M["index.mjs"]
  subgraph "event-emitter";
    I_0_0(["EventEmitter"]);
  end;
  M ----> I_0_0;
  E_0 ----> M;
~~~~~
