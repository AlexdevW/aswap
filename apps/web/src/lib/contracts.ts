import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from 'wagmi/codegen'

import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DebugToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const debugTokenAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'quantity', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721Abi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Factory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const factoryAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token0',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'token1',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'index', internalType: 'uint32', type: 'uint32', indexed: false },
      {
        name: 'tickLower',
        internalType: 'int24',
        type: 'int24',
        indexed: false,
      },
      {
        name: 'tickUpper',
        internalType: 'int24',
        type: 'int24',
        indexed: false,
      },
      { name: 'fee', internalType: 'uint24', type: 'uint24', indexed: false },
      {
        name: 'pool',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'PoolCreated',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
    ],
    name: 'createPool',
    outputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'getPool',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'parameters',
    outputs: [
      { name: 'factory', internalType: 'address', type: 'address' },
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'pools',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MetadataAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721MetadataAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ReceiverAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iFactoryAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token0',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'token1',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'index', internalType: 'uint32', type: 'uint32', indexed: false },
      {
        name: 'tickLower',
        internalType: 'int24',
        type: 'int24',
        indexed: false,
      },
      {
        name: 'tickUpper',
        internalType: 'int24',
        type: 'int24',
        indexed: false,
      },
      { name: 'fee', internalType: 'uint24', type: 'uint24', indexed: false },
      {
        name: 'pool',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'PoolCreated',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
    ],
    name: 'createPool',
    outputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'getPool',
    outputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'parameters',
    outputs: [
      { name: 'factory', internalType: 'address', type: 'address' },
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMintCallback
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMintCallbackAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'amount0Owed', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1Owed', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mintCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPoolAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'amount0',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount1',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Burn',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount0',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'amount1',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
    ],
    name: 'Collect',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'amount0',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount1',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Mint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount0',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'amount1',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'sqrtPriceX96',
        internalType: 'uint160',
        type: 'uint160',
        indexed: false,
      },
      {
        name: 'liquidity',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      { name: 'tick', internalType: 'int24', type: 'int24', indexed: false },
    ],
    name: 'Swap',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint128', type: 'uint128' }],
    name: 'burn',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount0Requested', internalType: 'uint128', type: 'uint128' },
      { name: 'amount1Requested', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'collect',
    outputs: [
      { name: 'amount0', internalType: 'uint128', type: 'uint128' },
      { name: 'amount1', internalType: 'uint128', type: 'uint128' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'fee',
    outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feeGrowthGlobal0X128',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feeGrowthGlobal1X128',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'getPosition',
    outputs: [
      { name: '_liquidity', internalType: 'uint128', type: 'uint128' },
      {
        name: 'feeGrowthInside0LastX128',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'feeGrowthInside1LastX128',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'tokensOwed0', internalType: 'uint128', type: 'uint128' },
      { name: 'tokensOwed1', internalType: 'uint128', type: 'uint128' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'liquidity',
    outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mint',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sqrtPriceX96',
    outputs: [{ name: '', internalType: 'uint160', type: 'uint160' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'zeroForOne', internalType: 'bool', type: 'bool' },
      { name: 'amountSpecified', internalType: 'int256', type: 'int256' },
      { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swap',
    outputs: [
      { name: 'amount0', internalType: 'int256', type: 'int256' },
      { name: 'amount1', internalType: 'int256', type: 'int256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tick',
    outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tickLower',
    outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tickUpper',
    outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token0',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token1',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPoolManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPoolManagerAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token0',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'token1',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'index', internalType: 'uint32', type: 'uint32', indexed: false },
      {
        name: 'tickLower',
        internalType: 'int24',
        type: 'int24',
        indexed: false,
      },
      {
        name: 'tickUpper',
        internalType: 'int24',
        type: 'int24',
        indexed: false,
      },
      { name: 'fee', internalType: 'uint24', type: 'uint24', indexed: false },
      {
        name: 'pool',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'PoolCreated',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IPoolManager.CreateAndInitializeParams',
        type: 'tuple',
        components: [
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
        ],
      },
    ],
    name: 'createAndInitializePoolIfNecessary',
    outputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
    ],
    name: 'createPool',
    outputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllPools',
    outputs: [
      {
        name: 'poolsInfo',
        internalType: 'struct IPoolManager.PoolInfo[]',
        type: 'tuple[]',
        components: [
          { name: 'pool', internalType: 'address', type: 'address' },
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
          { name: 'index', internalType: 'uint32', type: 'uint32' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'feeProtocol', internalType: 'uint8', type: 'uint8' },
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'tick', internalType: 'int24', type: 'int24' },
          { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
          { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getPairs',
    outputs: [
      {
        name: '',
        internalType: 'struct IPoolManager.Pair[]',
        type: 'tuple[]',
        components: [
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'getPool',
    outputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'parameters',
    outputs: [
      { name: 'factory', internalType: 'address', type: 'address' },
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPositionManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPositionManagerAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'positionId', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'positionId', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'collect',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllPositions',
    outputs: [
      {
        name: 'positionInfo',
        internalType: 'struct IPositionManager.PositionInfo[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
          { name: 'index', internalType: 'uint32', type: 'uint32' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'tokensOwed0', internalType: 'uint128', type: 'uint128' },
          { name: 'tokensOwed1', internalType: 'uint128', type: 'uint128' },
          {
            name: 'feeGrowthInside0LastX128',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'feeGrowthInside1LastX128',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IPositionManager.MintParams',
        type: 'tuple',
        components: [
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
          { name: 'index', internalType: 'uint32', type: 'uint32' },
          { name: 'amount0Desired', internalType: 'uint256', type: 'uint256' },
          { name: 'amount1Desired', internalType: 'uint256', type: 'uint256' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'mint',
    outputs: [
      { name: 'positionId', internalType: 'uint256', type: 'uint256' },
      { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mintCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISwapCallback
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSwapCallbackAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'amount0Delta', internalType: 'int256', type: 'int256' },
      { name: 'amount1Delta', internalType: 'int256', type: 'int256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swapCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISwapRouter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSwapRouterAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'zeroForOne',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
      {
        name: 'amountIn',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amountInRemaining',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amountOut',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Swap',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct ISwapRouter.ExactInputParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'indexPath', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
          { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
          {
            name: 'amountOutMinimum',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'sqrtPriceLimitX96',
            internalType: 'uint160',
            type: 'uint160',
          },
        ],
      },
    ],
    name: 'exactInput',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct ISwapRouter.ExactOutputParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'indexPath', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
          { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
          { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
          {
            name: 'sqrtPriceLimitX96',
            internalType: 'uint160',
            type: 'uint160',
          },
        ],
      },
    ],
    name: 'exactOutput',
    outputs: [{ name: 'amountIn', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct ISwapRouter.QuoteExactInputParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'indexPath', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
          {
            name: 'sqrtPriceLimitX96',
            internalType: 'uint160',
            type: 'uint160',
          },
        ],
      },
    ],
    name: 'quoteExactInput',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct ISwapRouter.QuoteExactOutputParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'indexPath', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
          {
            name: 'sqrtPriceLimitX96',
            internalType: 'uint160',
            type: 'uint160',
          },
        ],
      },
    ],
    name: 'quoteExactOutput',
    outputs: [{ name: 'amountIn', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount0Delta', internalType: 'int256', type: 'int256' },
      { name: 'amount1Delta', internalType: 'int256', type: 'int256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swapCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const poolAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'amount0',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount1',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Burn',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount0',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'amount1',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
    ],
    name: 'Collect',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'amount0',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount1',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Mint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount0',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'amount1',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'sqrtPriceX96',
        internalType: 'uint160',
        type: 'uint160',
        indexed: false,
      },
      {
        name: 'liquidity',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      { name: 'tick', internalType: 'int24', type: 'int24', indexed: false },
    ],
    name: 'Swap',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint128', type: 'uint128' }],
    name: 'burn',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount0Requested', internalType: 'uint128', type: 'uint128' },
      { name: 'amount1Requested', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'collect',
    outputs: [
      { name: 'amount0', internalType: 'uint128', type: 'uint128' },
      { name: 'amount1', internalType: 'uint128', type: 'uint128' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'fee',
    outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feeGrowthGlobal0X128',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feeGrowthGlobal1X128',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'getPosition',
    outputs: [
      { name: '_liquidity', internalType: 'uint128', type: 'uint128' },
      {
        name: 'feeGrowthInside0LastX128',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'feeGrowthInside1LastX128',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'tokensOwed0', internalType: 'uint128', type: 'uint128' },
      { name: 'tokensOwed1', internalType: 'uint128', type: 'uint128' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sqrtPriceX96_', internalType: 'uint160', type: 'uint160' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'liquidity',
    outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mint',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'positions',
    outputs: [
      { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
      { name: 'tokensOwed0', internalType: 'uint128', type: 'uint128' },
      { name: 'tokensOwed1', internalType: 'uint128', type: 'uint128' },
      {
        name: 'feeGrowthInside0LastX128',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'feeGrowthInside1LastX128',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sqrtPriceX96',
    outputs: [{ name: '', internalType: 'uint160', type: 'uint160' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'zeroForOne', internalType: 'bool', type: 'bool' },
      { name: 'amountSpecified', internalType: 'int256', type: 'int256' },
      { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swap',
    outputs: [
      { name: 'amount0', internalType: 'int256', type: 'int256' },
      { name: 'amount1', internalType: 'int256', type: 'int256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tick',
    outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tickLower',
    outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tickUpper',
    outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token0',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token1',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const poolManagerAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token0',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'token1',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'index', internalType: 'uint32', type: 'uint32', indexed: false },
      {
        name: 'tickLower',
        internalType: 'int24',
        type: 'int24',
        indexed: false,
      },
      {
        name: 'tickUpper',
        internalType: 'int24',
        type: 'int24',
        indexed: false,
      },
      { name: 'fee', internalType: 'uint24', type: 'uint24', indexed: false },
      {
        name: 'pool',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'PoolCreated',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IPoolManager.CreateAndInitializeParams',
        type: 'tuple',
        components: [
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
        ],
      },
    ],
    name: 'createAndInitializePoolIfNecessary',
    outputs: [
      { name: 'poolAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
    ],
    name: 'createPool',
    outputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllPools',
    outputs: [
      {
        name: 'poolsInfo',
        internalType: 'struct IPoolManager.PoolInfo[]',
        type: 'tuple[]',
        components: [
          { name: 'pool', internalType: 'address', type: 'address' },
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
          { name: 'index', internalType: 'uint32', type: 'uint32' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'feeProtocol', internalType: 'uint8', type: 'uint8' },
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'tick', internalType: 'int24', type: 'int24' },
          { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
          { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getPairs',
    outputs: [
      {
        name: '',
        internalType: 'struct IPoolManager.Pair[]',
        type: 'tuple[]',
        components: [
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'getPool',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'pairs',
    outputs: [
      { name: 'token0', internalType: 'address', type: 'address' },
      { name: 'token1', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'parameters',
    outputs: [
      { name: 'factory', internalType: 'address', type: 'address' },
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'pools',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PositionManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const positionManagerAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_poolManger', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'positionId', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'positionId', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'collect',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllPositions',
    outputs: [
      {
        name: 'positionInfo',
        internalType: 'struct IPositionManager.PositionInfo[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
          { name: 'index', internalType: 'uint32', type: 'uint32' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'tokensOwed0', internalType: 'uint128', type: 'uint128' },
          { name: 'tokensOwed1', internalType: 'uint128', type: 'uint128' },
          {
            name: 'feeGrowthInside0LastX128',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'feeGrowthInside1LastX128',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getSender',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IPositionManager.MintParams',
        type: 'tuple',
        components: [
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
          { name: 'index', internalType: 'uint32', type: 'uint32' },
          { name: 'amount0Desired', internalType: 'uint256', type: 'uint256' },
          { name: 'amount1Desired', internalType: 'uint256', type: 'uint256' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'mint',
    outputs: [
      { name: 'positionId', internalType: 'uint256', type: 'uint256' },
      { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mintCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'poolManager',
    outputs: [
      { name: '', internalType: 'contract IPoolManager', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'positions',
    outputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'token0', internalType: 'address', type: 'address' },
      { name: 'token1', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
      { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'tokensOwed0', internalType: 'uint128', type: 'uint128' },
      { name: 'tokensOwed1', internalType: 'uint128', type: 'uint128' },
      {
        name: 'feeGrowthInside0LastX128',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'feeGrowthInside1LastX128',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SafeCast
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeCastAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'SafeCastOverflowedIntDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'SafeCastOverflowedIntToUint',
  },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'SafeCastOverflowedUintToInt',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Strings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stringsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'StringsInsufficientHexLength',
  },
  { type: 'error', inputs: [], name: 'StringsInvalidAddressFormat' },
  { type: 'error', inputs: [], name: 'StringsInvalidChar' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SwapRouter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const swapRouterAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_poolManager', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'zeroForOne',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
      {
        name: 'amountIn',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amountInRemaining',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amountOut',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Swap',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct ISwapRouter.ExactInputParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'indexPath', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
          { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
          {
            name: 'amountOutMinimum',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'sqrtPriceLimitX96',
            internalType: 'uint160',
            type: 'uint160',
          },
        ],
      },
    ],
    name: 'exactInput',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct ISwapRouter.ExactOutputParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'indexPath', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
          { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
          { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
          {
            name: 'sqrtPriceLimitX96',
            internalType: 'uint160',
            type: 'uint160',
          },
        ],
      },
    ],
    name: 'exactOutput',
    outputs: [{ name: 'amountIn', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'poolManager',
    outputs: [
      { name: '', internalType: 'contract IPoolManager', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct ISwapRouter.QuoteExactInputParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'indexPath', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
          {
            name: 'sqrtPriceLimitX96',
            internalType: 'uint160',
            type: 'uint160',
          },
        ],
      },
    ],
    name: 'quoteExactInput',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct ISwapRouter.QuoteExactOutputParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'indexPath', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
          {
            name: 'sqrtPriceLimitX96',
            internalType: 'uint160',
            type: 'uint160',
          },
        ],
      },
    ],
    name: 'quoteExactOutput',
    outputs: [{ name: 'amountIn', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount0Delta', internalType: 'int256', type: 'int256' },
      { name: 'amount1Delta', internalType: 'int256', type: 'int256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swapCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pool', internalType: 'contract IPool', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'zeroForOne', internalType: 'bool', type: 'bool' },
      { name: 'amountSpecified', internalType: 'int256', type: 'int256' },
      { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swapInPool',
    outputs: [
      { name: 'amount0', internalType: 'int256', type: 'int256' },
      { name: 'amount1', internalType: 'int256', type: 'int256' },
    ],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TestLP
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testLpAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
      { name: 'pool', internalType: 'address', type: 'address' },
    ],
    name: 'burn',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'pool', internalType: 'address', type: 'address' },
    ],
    name: 'collect',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
      { name: 'pool', internalType: 'address', type: 'address' },
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
    ],
    name: 'mint',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount0Owed', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1Owed', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mintCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TestSwap
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testSwapAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'amount0Delta', internalType: 'int256', type: 'int256' },
      { name: 'amount1Delta', internalType: 'int256', type: 'int256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swapCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'int256', type: 'int256' },
      { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
      { name: 'pool', internalType: 'address', type: 'address' },
      { name: 'token0', internalType: 'address', type: 'address' },
      { name: 'token1', internalType: 'address', type: 'address' },
    ],
    name: 'testSwap',
    outputs: [
      { name: 'amount0', internalType: 'int256', type: 'int256' },
      { name: 'amount1', internalType: 'int256', type: 'int256' },
    ],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TestToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testTokenAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'quantity', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TickMath
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tickMathAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
    ],
    name: 'InvalidSqrtPrice',
  },
  {
    type: 'error',
    inputs: [{ name: 'tick', internalType: 'int24', type: 'int24' }],
    name: 'InvalidTick',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link debugTokenAbi}__
 */
export const readDebugToken = /*#__PURE__*/ createReadContract({
  abi: debugTokenAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"allowance"`
 */
export const readDebugTokenAllowance = /*#__PURE__*/ createReadContract({
  abi: debugTokenAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readDebugTokenBalanceOf = /*#__PURE__*/ createReadContract({
  abi: debugTokenAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"decimals"`
 */
export const readDebugTokenDecimals = /*#__PURE__*/ createReadContract({
  abi: debugTokenAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"name"`
 */
export const readDebugTokenName = /*#__PURE__*/ createReadContract({
  abi: debugTokenAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"symbol"`
 */
export const readDebugTokenSymbol = /*#__PURE__*/ createReadContract({
  abi: debugTokenAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readDebugTokenTotalSupply = /*#__PURE__*/ createReadContract({
  abi: debugTokenAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link debugTokenAbi}__
 */
export const writeDebugToken = /*#__PURE__*/ createWriteContract({
  abi: debugTokenAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"approve"`
 */
export const writeDebugTokenApprove = /*#__PURE__*/ createWriteContract({
  abi: debugTokenAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"mint"`
 */
export const writeDebugTokenMint = /*#__PURE__*/ createWriteContract({
  abi: debugTokenAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const writeDebugTokenTransfer = /*#__PURE__*/ createWriteContract({
  abi: debugTokenAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeDebugTokenTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: debugTokenAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link debugTokenAbi}__
 */
export const simulateDebugToken = /*#__PURE__*/ createSimulateContract({
  abi: debugTokenAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"approve"`
 */
export const simulateDebugTokenApprove = /*#__PURE__*/ createSimulateContract({
  abi: debugTokenAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"mint"`
 */
export const simulateDebugTokenMint = /*#__PURE__*/ createSimulateContract({
  abi: debugTokenAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateDebugTokenTransfer = /*#__PURE__*/ createSimulateContract({
  abi: debugTokenAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateDebugTokenTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: debugTokenAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link debugTokenAbi}__
 */
export const watchDebugTokenEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: debugTokenAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link debugTokenAbi}__ and `eventName` set to `"Approval"`
 */
export const watchDebugTokenApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: debugTokenAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link debugTokenAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchDebugTokenTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: debugTokenAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc165Abi}__
 */
export const readErc165 = /*#__PURE__*/ createReadContract({ abi: erc165Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readErc165SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: erc165Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const readErc20 = /*#__PURE__*/ createReadContract({ abi: erc20Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const readErc20Allowance = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc20BalanceOf = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const readErc20Decimals = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const readErc20Name = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const readErc20Symbol = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const readErc20TotalSupply = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const writeErc20 = /*#__PURE__*/ createWriteContract({ abi: erc20Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const writeErc20Approve = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const writeErc20Transfer = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc20TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const simulateErc20 = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const simulateErc20Approve = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const simulateErc20Transfer = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc20TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const watchErc20Event = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const watchErc20ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc20TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const readErc721 = /*#__PURE__*/ createReadContract({ abi: erc721Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc721BalanceOf = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const readErc721GetApproved = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readErc721IsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"name"`
 */
export const readErc721Name = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const readErc721OwnerOf = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readErc721SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"symbol"`
 */
export const readErc721Symbol = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const readErc721TokenUri = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const writeErc721 = /*#__PURE__*/ createWriteContract({ abi: erc721Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const writeErc721Approve = /*#__PURE__*/ createWriteContract({
  abi: erc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeErc721SafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc721Abi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeErc721SetApprovalForAll = /*#__PURE__*/ createWriteContract({
  abi: erc721Abi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc721TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const simulateErc721 = /*#__PURE__*/ createSimulateContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const simulateErc721Approve = /*#__PURE__*/ createSimulateContract({
  abi: erc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateErc721SafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateErc721SetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc721TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: erc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721Abi}__
 */
export const watchErc721Event = /*#__PURE__*/ createWatchContractEvent({
  abi: erc721Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Approval"`
 */
export const watchErc721ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc721Abi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchErc721ApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc721TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc721Abi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link factoryAbi}__
 */
export const readFactory = /*#__PURE__*/ createReadContract({ abi: factoryAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link factoryAbi}__ and `functionName` set to `"getPool"`
 */
export const readFactoryGetPool = /*#__PURE__*/ createReadContract({
  abi: factoryAbi,
  functionName: 'getPool',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link factoryAbi}__ and `functionName` set to `"parameters"`
 */
export const readFactoryParameters = /*#__PURE__*/ createReadContract({
  abi: factoryAbi,
  functionName: 'parameters',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link factoryAbi}__ and `functionName` set to `"pools"`
 */
export const readFactoryPools = /*#__PURE__*/ createReadContract({
  abi: factoryAbi,
  functionName: 'pools',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link factoryAbi}__
 */
export const writeFactory = /*#__PURE__*/ createWriteContract({
  abi: factoryAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link factoryAbi}__ and `functionName` set to `"createPool"`
 */
export const writeFactoryCreatePool = /*#__PURE__*/ createWriteContract({
  abi: factoryAbi,
  functionName: 'createPool',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link factoryAbi}__
 */
export const simulateFactory = /*#__PURE__*/ createSimulateContract({
  abi: factoryAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link factoryAbi}__ and `functionName` set to `"createPool"`
 */
export const simulateFactoryCreatePool = /*#__PURE__*/ createSimulateContract({
  abi: factoryAbi,
  functionName: 'createPool',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link factoryAbi}__
 */
export const watchFactoryEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: factoryAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link factoryAbi}__ and `eventName` set to `"PoolCreated"`
 */
export const watchFactoryPoolCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: factoryAbi,
    eventName: 'PoolCreated',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc165Abi}__
 */
export const readIerc165 = /*#__PURE__*/ createReadContract({ abi: ierc165Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc165SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: ierc165Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const readIerc20 = /*#__PURE__*/ createReadContract({ abi: ierc20Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"allowance"`
 */
export const readIerc20Allowance = /*#__PURE__*/ createReadContract({
  abi: ierc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc20BalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const readIerc20TotalSupply = /*#__PURE__*/ createReadContract({
  abi: ierc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const writeIerc20 = /*#__PURE__*/ createWriteContract({ abi: ierc20Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const writeIerc20Approve = /*#__PURE__*/ createWriteContract({
  abi: ierc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const writeIerc20Transfer = /*#__PURE__*/ createWriteContract({
  abi: ierc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc20TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const simulateIerc20 = /*#__PURE__*/ createSimulateContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc20Approve = /*#__PURE__*/ createSimulateContract({
  abi: ierc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const simulateIerc20Transfer = /*#__PURE__*/ createSimulateContract({
  abi: ierc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc20TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: ierc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20Abi}__
 */
export const watchIerc20Event = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc20ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20Abi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc20TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20Abi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const readIerc20Metadata = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"allowance"`
 */
export const readIerc20MetadataAllowance = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc20MetadataBalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"decimals"`
 */
export const readIerc20MetadataDecimals = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"name"`
 */
export const readIerc20MetadataName = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const readIerc20MetadataSymbol = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readIerc20MetadataTotalSupply = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const writeIerc20Metadata = /*#__PURE__*/ createWriteContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const writeIerc20MetadataApprove = /*#__PURE__*/ createWriteContract({
  abi: ierc20MetadataAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const writeIerc20MetadataTransfer = /*#__PURE__*/ createWriteContract({
  abi: ierc20MetadataAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc20MetadataTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const simulateIerc20Metadata = /*#__PURE__*/ createSimulateContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc20MetadataApprove =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateIerc20MetadataTransfer =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc20MetadataTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const watchIerc20MetadataEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc20MetadataApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc20MetadataTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const readIerc721 = /*#__PURE__*/ createReadContract({ abi: ierc721Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc721BalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const readIerc721GetApproved = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readIerc721IsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const readIerc721OwnerOf = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc721SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const writeIerc721 = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const writeIerc721Approve = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeIerc721SafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeIerc721SetApprovalForAll = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc721TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const simulateIerc721 = /*#__PURE__*/ createSimulateContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc721Approve = /*#__PURE__*/ createSimulateContract({
  abi: ierc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateIerc721SafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateIerc721SetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc721TransferFrom = /*#__PURE__*/ createSimulateContract(
  { abi: ierc721Abi, functionName: 'transferFrom' }
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__
 */
export const watchIerc721Event = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc721ApprovalEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: ierc721Abi, eventName: 'Approval' }
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchIerc721ApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc721TransferEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: ierc721Abi, eventName: 'Transfer' }
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const readIerc721Metadata = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc721MetadataBalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"getApproved"`
 */
export const readIerc721MetadataGetApproved = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readIerc721MetadataIsApprovedForAll =
  /*#__PURE__*/ createReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"name"`
 */
export const readIerc721MetadataName = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readIerc721MetadataOwnerOf = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc721MetadataSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const readIerc721MetadataSymbol = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"tokenURI"`
 */
export const readIerc721MetadataTokenUri = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const writeIerc721Metadata = /*#__PURE__*/ createWriteContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const writeIerc721MetadataApprove = /*#__PURE__*/ createWriteContract({
  abi: ierc721MetadataAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc721MetadataTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const simulateIerc721Metadata = /*#__PURE__*/ createSimulateContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc721MetadataApprove =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc721MetadataTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const watchIerc721MetadataEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: ierc721MetadataAbi }
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc721MetadataApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchIerc721MetadataApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc721MetadataTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const writeIerc721Receiver = /*#__PURE__*/ createWriteContract({
  abi: ierc721ReceiverAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const writeIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createWriteContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const simulateIerc721Receiver = /*#__PURE__*/ createSimulateContract({
  abi: ierc721ReceiverAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const simulateIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iFactoryAbi}__
 */
export const readIFactory = /*#__PURE__*/ createReadContract({
  abi: iFactoryAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iFactoryAbi}__ and `functionName` set to `"getPool"`
 */
export const readIFactoryGetPool = /*#__PURE__*/ createReadContract({
  abi: iFactoryAbi,
  functionName: 'getPool',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iFactoryAbi}__ and `functionName` set to `"parameters"`
 */
export const readIFactoryParameters = /*#__PURE__*/ createReadContract({
  abi: iFactoryAbi,
  functionName: 'parameters',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iFactoryAbi}__
 */
export const writeIFactory = /*#__PURE__*/ createWriteContract({
  abi: iFactoryAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iFactoryAbi}__ and `functionName` set to `"createPool"`
 */
export const writeIFactoryCreatePool = /*#__PURE__*/ createWriteContract({
  abi: iFactoryAbi,
  functionName: 'createPool',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iFactoryAbi}__
 */
export const simulateIFactory = /*#__PURE__*/ createSimulateContract({
  abi: iFactoryAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iFactoryAbi}__ and `functionName` set to `"createPool"`
 */
export const simulateIFactoryCreatePool = /*#__PURE__*/ createSimulateContract({
  abi: iFactoryAbi,
  functionName: 'createPool',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iFactoryAbi}__
 */
export const watchIFactoryEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iFactoryAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iFactoryAbi}__ and `eventName` set to `"PoolCreated"`
 */
export const watchIFactoryPoolCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iFactoryAbi,
    eventName: 'PoolCreated',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMintCallbackAbi}__
 */
export const writeIMintCallback = /*#__PURE__*/ createWriteContract({
  abi: iMintCallbackAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMintCallbackAbi}__ and `functionName` set to `"mintCallback"`
 */
export const writeIMintCallbackMintCallback = /*#__PURE__*/ createWriteContract(
  { abi: iMintCallbackAbi, functionName: 'mintCallback' }
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMintCallbackAbi}__
 */
export const simulateIMintCallback = /*#__PURE__*/ createSimulateContract({
  abi: iMintCallbackAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMintCallbackAbi}__ and `functionName` set to `"mintCallback"`
 */
export const simulateIMintCallbackMintCallback =
  /*#__PURE__*/ createSimulateContract({
    abi: iMintCallbackAbi,
    functionName: 'mintCallback',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPoolAbi}__
 */
export const readIPool = /*#__PURE__*/ createReadContract({ abi: iPoolAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"factory"`
 */
export const readIPoolFactory = /*#__PURE__*/ createReadContract({
  abi: iPoolAbi,
  functionName: 'factory',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"fee"`
 */
export const readIPoolFee = /*#__PURE__*/ createReadContract({
  abi: iPoolAbi,
  functionName: 'fee',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"feeGrowthGlobal0X128"`
 */
export const readIPoolFeeGrowthGlobal0X128 = /*#__PURE__*/ createReadContract({
  abi: iPoolAbi,
  functionName: 'feeGrowthGlobal0X128',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"feeGrowthGlobal1X128"`
 */
export const readIPoolFeeGrowthGlobal1X128 = /*#__PURE__*/ createReadContract({
  abi: iPoolAbi,
  functionName: 'feeGrowthGlobal1X128',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"getPosition"`
 */
export const readIPoolGetPosition = /*#__PURE__*/ createReadContract({
  abi: iPoolAbi,
  functionName: 'getPosition',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"liquidity"`
 */
export const readIPoolLiquidity = /*#__PURE__*/ createReadContract({
  abi: iPoolAbi,
  functionName: 'liquidity',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"sqrtPriceX96"`
 */
export const readIPoolSqrtPriceX96 = /*#__PURE__*/ createReadContract({
  abi: iPoolAbi,
  functionName: 'sqrtPriceX96',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"tick"`
 */
export const readIPoolTick = /*#__PURE__*/ createReadContract({
  abi: iPoolAbi,
  functionName: 'tick',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"tickLower"`
 */
export const readIPoolTickLower = /*#__PURE__*/ createReadContract({
  abi: iPoolAbi,
  functionName: 'tickLower',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"tickUpper"`
 */
export const readIPoolTickUpper = /*#__PURE__*/ createReadContract({
  abi: iPoolAbi,
  functionName: 'tickUpper',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"token0"`
 */
export const readIPoolToken0 = /*#__PURE__*/ createReadContract({
  abi: iPoolAbi,
  functionName: 'token0',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"token1"`
 */
export const readIPoolToken1 = /*#__PURE__*/ createReadContract({
  abi: iPoolAbi,
  functionName: 'token1',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPoolAbi}__
 */
export const writeIPool = /*#__PURE__*/ createWriteContract({ abi: iPoolAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"burn"`
 */
export const writeIPoolBurn = /*#__PURE__*/ createWriteContract({
  abi: iPoolAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"collect"`
 */
export const writeIPoolCollect = /*#__PURE__*/ createWriteContract({
  abi: iPoolAbi,
  functionName: 'collect',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"initialize"`
 */
export const writeIPoolInitialize = /*#__PURE__*/ createWriteContract({
  abi: iPoolAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"mint"`
 */
export const writeIPoolMint = /*#__PURE__*/ createWriteContract({
  abi: iPoolAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"swap"`
 */
export const writeIPoolSwap = /*#__PURE__*/ createWriteContract({
  abi: iPoolAbi,
  functionName: 'swap',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iPoolAbi}__
 */
export const simulateIPool = /*#__PURE__*/ createSimulateContract({
  abi: iPoolAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"burn"`
 */
export const simulateIPoolBurn = /*#__PURE__*/ createSimulateContract({
  abi: iPoolAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"collect"`
 */
export const simulateIPoolCollect = /*#__PURE__*/ createSimulateContract({
  abi: iPoolAbi,
  functionName: 'collect',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateIPoolInitialize = /*#__PURE__*/ createSimulateContract({
  abi: iPoolAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"mint"`
 */
export const simulateIPoolMint = /*#__PURE__*/ createSimulateContract({
  abi: iPoolAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"swap"`
 */
export const simulateIPoolSwap = /*#__PURE__*/ createSimulateContract({
  abi: iPoolAbi,
  functionName: 'swap',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iPoolAbi}__
 */
export const watchIPoolEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iPoolAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iPoolAbi}__ and `eventName` set to `"Burn"`
 */
export const watchIPoolBurnEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iPoolAbi,
  eventName: 'Burn',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iPoolAbi}__ and `eventName` set to `"Collect"`
 */
export const watchIPoolCollectEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iPoolAbi,
  eventName: 'Collect',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iPoolAbi}__ and `eventName` set to `"Mint"`
 */
export const watchIPoolMintEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iPoolAbi,
  eventName: 'Mint',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iPoolAbi}__ and `eventName` set to `"Swap"`
 */
export const watchIPoolSwapEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iPoolAbi,
  eventName: 'Swap',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPoolManagerAbi}__
 */
export const readIPoolManager = /*#__PURE__*/ createReadContract({
  abi: iPoolManagerAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"getAllPools"`
 */
export const readIPoolManagerGetAllPools = /*#__PURE__*/ createReadContract({
  abi: iPoolManagerAbi,
  functionName: 'getAllPools',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"getPairs"`
 */
export const readIPoolManagerGetPairs = /*#__PURE__*/ createReadContract({
  abi: iPoolManagerAbi,
  functionName: 'getPairs',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"getPool"`
 */
export const readIPoolManagerGetPool = /*#__PURE__*/ createReadContract({
  abi: iPoolManagerAbi,
  functionName: 'getPool',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"parameters"`
 */
export const readIPoolManagerParameters = /*#__PURE__*/ createReadContract({
  abi: iPoolManagerAbi,
  functionName: 'parameters',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPoolManagerAbi}__
 */
export const writeIPoolManager = /*#__PURE__*/ createWriteContract({
  abi: iPoolManagerAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"createAndInitializePoolIfNecessary"`
 */
export const writeIPoolManagerCreateAndInitializePoolIfNecessary =
  /*#__PURE__*/ createWriteContract({
    abi: iPoolManagerAbi,
    functionName: 'createAndInitializePoolIfNecessary',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"createPool"`
 */
export const writeIPoolManagerCreatePool = /*#__PURE__*/ createWriteContract({
  abi: iPoolManagerAbi,
  functionName: 'createPool',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iPoolManagerAbi}__
 */
export const simulateIPoolManager = /*#__PURE__*/ createSimulateContract({
  abi: iPoolManagerAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"createAndInitializePoolIfNecessary"`
 */
export const simulateIPoolManagerCreateAndInitializePoolIfNecessary =
  /*#__PURE__*/ createSimulateContract({
    abi: iPoolManagerAbi,
    functionName: 'createAndInitializePoolIfNecessary',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"createPool"`
 */
export const simulateIPoolManagerCreatePool =
  /*#__PURE__*/ createSimulateContract({
    abi: iPoolManagerAbi,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iPoolManagerAbi}__
 */
export const watchIPoolManagerEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iPoolManagerAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iPoolManagerAbi}__ and `eventName` set to `"PoolCreated"`
 */
export const watchIPoolManagerPoolCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iPoolManagerAbi,
    eventName: 'PoolCreated',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPositionManagerAbi}__
 */
export const readIPositionManager = /*#__PURE__*/ createReadContract({
  abi: iPositionManagerAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readIPositionManagerBalanceOf = /*#__PURE__*/ createReadContract({
  abi: iPositionManagerAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"getAllPositions"`
 */
export const readIPositionManagerGetAllPositions =
  /*#__PURE__*/ createReadContract({
    abi: iPositionManagerAbi,
    functionName: 'getAllPositions',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"getApproved"`
 */
export const readIPositionManagerGetApproved = /*#__PURE__*/ createReadContract(
  { abi: iPositionManagerAbi, functionName: 'getApproved' }
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readIPositionManagerIsApprovedForAll =
  /*#__PURE__*/ createReadContract({
    abi: iPositionManagerAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readIPositionManagerOwnerOf = /*#__PURE__*/ createReadContract({
  abi: iPositionManagerAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIPositionManagerSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: iPositionManagerAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPositionManagerAbi}__
 */
export const writeIPositionManager = /*#__PURE__*/ createWriteContract({
  abi: iPositionManagerAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"approve"`
 */
export const writeIPositionManagerApprove = /*#__PURE__*/ createWriteContract({
  abi: iPositionManagerAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"burn"`
 */
export const writeIPositionManagerBurn = /*#__PURE__*/ createWriteContract({
  abi: iPositionManagerAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"collect"`
 */
export const writeIPositionManagerCollect = /*#__PURE__*/ createWriteContract({
  abi: iPositionManagerAbi,
  functionName: 'collect',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"mint"`
 */
export const writeIPositionManagerMint = /*#__PURE__*/ createWriteContract({
  abi: iPositionManagerAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"mintCallback"`
 */
export const writeIPositionManagerMintCallback =
  /*#__PURE__*/ createWriteContract({
    abi: iPositionManagerAbi,
    functionName: 'mintCallback',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeIPositionManagerSafeTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: iPositionManagerAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeIPositionManagerSetApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: iPositionManagerAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIPositionManagerTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: iPositionManagerAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__
 */
export const simulateIPositionManager = /*#__PURE__*/ createSimulateContract({
  abi: iPositionManagerAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"approve"`
 */
export const simulateIPositionManagerApprove =
  /*#__PURE__*/ createSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"burn"`
 */
export const simulateIPositionManagerBurn =
  /*#__PURE__*/ createSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"collect"`
 */
export const simulateIPositionManagerCollect =
  /*#__PURE__*/ createSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'collect',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"mint"`
 */
export const simulateIPositionManagerMint =
  /*#__PURE__*/ createSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"mintCallback"`
 */
export const simulateIPositionManagerMintCallback =
  /*#__PURE__*/ createSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'mintCallback',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateIPositionManagerSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateIPositionManagerSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIPositionManagerTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iPositionManagerAbi}__
 */
export const watchIPositionManagerEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: iPositionManagerAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iPositionManagerAbi}__ and `eventName` set to `"Approval"`
 */
export const watchIPositionManagerApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iPositionManagerAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iPositionManagerAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchIPositionManagerApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iPositionManagerAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iPositionManagerAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchIPositionManagerTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iPositionManagerAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSwapCallbackAbi}__
 */
export const writeISwapCallback = /*#__PURE__*/ createWriteContract({
  abi: iSwapCallbackAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSwapCallbackAbi}__ and `functionName` set to `"swapCallback"`
 */
export const writeISwapCallbackSwapCallback = /*#__PURE__*/ createWriteContract(
  { abi: iSwapCallbackAbi, functionName: 'swapCallback' }
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iSwapCallbackAbi}__
 */
export const simulateISwapCallback = /*#__PURE__*/ createSimulateContract({
  abi: iSwapCallbackAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iSwapCallbackAbi}__ and `functionName` set to `"swapCallback"`
 */
export const simulateISwapCallbackSwapCallback =
  /*#__PURE__*/ createSimulateContract({
    abi: iSwapCallbackAbi,
    functionName: 'swapCallback',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSwapRouterAbi}__
 */
export const writeISwapRouter = /*#__PURE__*/ createWriteContract({
  abi: iSwapRouterAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"exactInput"`
 */
export const writeISwapRouterExactInput = /*#__PURE__*/ createWriteContract({
  abi: iSwapRouterAbi,
  functionName: 'exactInput',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"exactOutput"`
 */
export const writeISwapRouterExactOutput = /*#__PURE__*/ createWriteContract({
  abi: iSwapRouterAbi,
  functionName: 'exactOutput',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"quoteExactInput"`
 */
export const writeISwapRouterQuoteExactInput =
  /*#__PURE__*/ createWriteContract({
    abi: iSwapRouterAbi,
    functionName: 'quoteExactInput',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"quoteExactOutput"`
 */
export const writeISwapRouterQuoteExactOutput =
  /*#__PURE__*/ createWriteContract({
    abi: iSwapRouterAbi,
    functionName: 'quoteExactOutput',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"swapCallback"`
 */
export const writeISwapRouterSwapCallback = /*#__PURE__*/ createWriteContract({
  abi: iSwapRouterAbi,
  functionName: 'swapCallback',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iSwapRouterAbi}__
 */
export const simulateISwapRouter = /*#__PURE__*/ createSimulateContract({
  abi: iSwapRouterAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"exactInput"`
 */
export const simulateISwapRouterExactInput =
  /*#__PURE__*/ createSimulateContract({
    abi: iSwapRouterAbi,
    functionName: 'exactInput',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"exactOutput"`
 */
export const simulateISwapRouterExactOutput =
  /*#__PURE__*/ createSimulateContract({
    abi: iSwapRouterAbi,
    functionName: 'exactOutput',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"quoteExactInput"`
 */
export const simulateISwapRouterQuoteExactInput =
  /*#__PURE__*/ createSimulateContract({
    abi: iSwapRouterAbi,
    functionName: 'quoteExactInput',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"quoteExactOutput"`
 */
export const simulateISwapRouterQuoteExactOutput =
  /*#__PURE__*/ createSimulateContract({
    abi: iSwapRouterAbi,
    functionName: 'quoteExactOutput',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"swapCallback"`
 */
export const simulateISwapRouterSwapCallback =
  /*#__PURE__*/ createSimulateContract({
    abi: iSwapRouterAbi,
    functionName: 'swapCallback',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iSwapRouterAbi}__
 */
export const watchISwapRouterEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iSwapRouterAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iSwapRouterAbi}__ and `eventName` set to `"Swap"`
 */
export const watchISwapRouterSwapEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: iSwapRouterAbi, eventName: 'Swap' }
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolAbi}__
 */
export const readPool = /*#__PURE__*/ createReadContract({ abi: poolAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"factory"`
 */
export const readPoolFactory = /*#__PURE__*/ createReadContract({
  abi: poolAbi,
  functionName: 'factory',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"fee"`
 */
export const readPoolFee = /*#__PURE__*/ createReadContract({
  abi: poolAbi,
  functionName: 'fee',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"feeGrowthGlobal0X128"`
 */
export const readPoolFeeGrowthGlobal0X128 = /*#__PURE__*/ createReadContract({
  abi: poolAbi,
  functionName: 'feeGrowthGlobal0X128',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"feeGrowthGlobal1X128"`
 */
export const readPoolFeeGrowthGlobal1X128 = /*#__PURE__*/ createReadContract({
  abi: poolAbi,
  functionName: 'feeGrowthGlobal1X128',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"getPosition"`
 */
export const readPoolGetPosition = /*#__PURE__*/ createReadContract({
  abi: poolAbi,
  functionName: 'getPosition',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"liquidity"`
 */
export const readPoolLiquidity = /*#__PURE__*/ createReadContract({
  abi: poolAbi,
  functionName: 'liquidity',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"positions"`
 */
export const readPoolPositions = /*#__PURE__*/ createReadContract({
  abi: poolAbi,
  functionName: 'positions',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"sqrtPriceX96"`
 */
export const readPoolSqrtPriceX96 = /*#__PURE__*/ createReadContract({
  abi: poolAbi,
  functionName: 'sqrtPriceX96',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"tick"`
 */
export const readPoolTick = /*#__PURE__*/ createReadContract({
  abi: poolAbi,
  functionName: 'tick',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"tickLower"`
 */
export const readPoolTickLower = /*#__PURE__*/ createReadContract({
  abi: poolAbi,
  functionName: 'tickLower',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"tickUpper"`
 */
export const readPoolTickUpper = /*#__PURE__*/ createReadContract({
  abi: poolAbi,
  functionName: 'tickUpper',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"token0"`
 */
export const readPoolToken0 = /*#__PURE__*/ createReadContract({
  abi: poolAbi,
  functionName: 'token0',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"token1"`
 */
export const readPoolToken1 = /*#__PURE__*/ createReadContract({
  abi: poolAbi,
  functionName: 'token1',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link poolAbi}__
 */
export const writePool = /*#__PURE__*/ createWriteContract({ abi: poolAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"burn"`
 */
export const writePoolBurn = /*#__PURE__*/ createWriteContract({
  abi: poolAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"collect"`
 */
export const writePoolCollect = /*#__PURE__*/ createWriteContract({
  abi: poolAbi,
  functionName: 'collect',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"initialize"`
 */
export const writePoolInitialize = /*#__PURE__*/ createWriteContract({
  abi: poolAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"mint"`
 */
export const writePoolMint = /*#__PURE__*/ createWriteContract({
  abi: poolAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"swap"`
 */
export const writePoolSwap = /*#__PURE__*/ createWriteContract({
  abi: poolAbi,
  functionName: 'swap',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link poolAbi}__
 */
export const simulatePool = /*#__PURE__*/ createSimulateContract({
  abi: poolAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"burn"`
 */
export const simulatePoolBurn = /*#__PURE__*/ createSimulateContract({
  abi: poolAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"collect"`
 */
export const simulatePoolCollect = /*#__PURE__*/ createSimulateContract({
  abi: poolAbi,
  functionName: 'collect',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"initialize"`
 */
export const simulatePoolInitialize = /*#__PURE__*/ createSimulateContract({
  abi: poolAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"mint"`
 */
export const simulatePoolMint = /*#__PURE__*/ createSimulateContract({
  abi: poolAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"swap"`
 */
export const simulatePoolSwap = /*#__PURE__*/ createSimulateContract({
  abi: poolAbi,
  functionName: 'swap',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link poolAbi}__
 */
export const watchPoolEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: poolAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"Burn"`
 */
export const watchPoolBurnEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: poolAbi,
  eventName: 'Burn',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"Collect"`
 */
export const watchPoolCollectEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: poolAbi,
  eventName: 'Collect',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"Mint"`
 */
export const watchPoolMintEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: poolAbi,
  eventName: 'Mint',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"Swap"`
 */
export const watchPoolSwapEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: poolAbi,
  eventName: 'Swap',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolManagerAbi}__
 */
export const readPoolManager = /*#__PURE__*/ createReadContract({
  abi: poolManagerAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"getAllPools"`
 */
export const readPoolManagerGetAllPools = /*#__PURE__*/ createReadContract({
  abi: poolManagerAbi,
  functionName: 'getAllPools',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"getPairs"`
 */
export const readPoolManagerGetPairs = /*#__PURE__*/ createReadContract({
  abi: poolManagerAbi,
  functionName: 'getPairs',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"getPool"`
 */
export const readPoolManagerGetPool = /*#__PURE__*/ createReadContract({
  abi: poolManagerAbi,
  functionName: 'getPool',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"pairs"`
 */
export const readPoolManagerPairs = /*#__PURE__*/ createReadContract({
  abi: poolManagerAbi,
  functionName: 'pairs',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"parameters"`
 */
export const readPoolManagerParameters = /*#__PURE__*/ createReadContract({
  abi: poolManagerAbi,
  functionName: 'parameters',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"pools"`
 */
export const readPoolManagerPools = /*#__PURE__*/ createReadContract({
  abi: poolManagerAbi,
  functionName: 'pools',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link poolManagerAbi}__
 */
export const writePoolManager = /*#__PURE__*/ createWriteContract({
  abi: poolManagerAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"createAndInitializePoolIfNecessary"`
 */
export const writePoolManagerCreateAndInitializePoolIfNecessary =
  /*#__PURE__*/ createWriteContract({
    abi: poolManagerAbi,
    functionName: 'createAndInitializePoolIfNecessary',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"createPool"`
 */
export const writePoolManagerCreatePool = /*#__PURE__*/ createWriteContract({
  abi: poolManagerAbi,
  functionName: 'createPool',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link poolManagerAbi}__
 */
export const simulatePoolManager = /*#__PURE__*/ createSimulateContract({
  abi: poolManagerAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"createAndInitializePoolIfNecessary"`
 */
export const simulatePoolManagerCreateAndInitializePoolIfNecessary =
  /*#__PURE__*/ createSimulateContract({
    abi: poolManagerAbi,
    functionName: 'createAndInitializePoolIfNecessary',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"createPool"`
 */
export const simulatePoolManagerCreatePool =
  /*#__PURE__*/ createSimulateContract({
    abi: poolManagerAbi,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link poolManagerAbi}__
 */
export const watchPoolManagerEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: poolManagerAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link poolManagerAbi}__ and `eventName` set to `"PoolCreated"`
 */
export const watchPoolManagerPoolCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: poolManagerAbi,
    eventName: 'PoolCreated',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link positionManagerAbi}__
 */
export const readPositionManager = /*#__PURE__*/ createReadContract({
  abi: positionManagerAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readPositionManagerBalanceOf = /*#__PURE__*/ createReadContract({
  abi: positionManagerAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"getAllPositions"`
 */
export const readPositionManagerGetAllPositions =
  /*#__PURE__*/ createReadContract({
    abi: positionManagerAbi,
    functionName: 'getAllPositions',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"getApproved"`
 */
export const readPositionManagerGetApproved = /*#__PURE__*/ createReadContract({
  abi: positionManagerAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"getSender"`
 */
export const readPositionManagerGetSender = /*#__PURE__*/ createReadContract({
  abi: positionManagerAbi,
  functionName: 'getSender',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readPositionManagerIsApprovedForAll =
  /*#__PURE__*/ createReadContract({
    abi: positionManagerAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"name"`
 */
export const readPositionManagerName = /*#__PURE__*/ createReadContract({
  abi: positionManagerAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readPositionManagerOwnerOf = /*#__PURE__*/ createReadContract({
  abi: positionManagerAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"poolManager"`
 */
export const readPositionManagerPoolManager = /*#__PURE__*/ createReadContract({
  abi: positionManagerAbi,
  functionName: 'poolManager',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"positions"`
 */
export const readPositionManagerPositions = /*#__PURE__*/ createReadContract({
  abi: positionManagerAbi,
  functionName: 'positions',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readPositionManagerSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: positionManagerAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"symbol"`
 */
export const readPositionManagerSymbol = /*#__PURE__*/ createReadContract({
  abi: positionManagerAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"tokenURI"`
 */
export const readPositionManagerTokenUri = /*#__PURE__*/ createReadContract({
  abi: positionManagerAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link positionManagerAbi}__
 */
export const writePositionManager = /*#__PURE__*/ createWriteContract({
  abi: positionManagerAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"approve"`
 */
export const writePositionManagerApprove = /*#__PURE__*/ createWriteContract({
  abi: positionManagerAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"burn"`
 */
export const writePositionManagerBurn = /*#__PURE__*/ createWriteContract({
  abi: positionManagerAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"collect"`
 */
export const writePositionManagerCollect = /*#__PURE__*/ createWriteContract({
  abi: positionManagerAbi,
  functionName: 'collect',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"mint"`
 */
export const writePositionManagerMint = /*#__PURE__*/ createWriteContract({
  abi: positionManagerAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"mintCallback"`
 */
export const writePositionManagerMintCallback =
  /*#__PURE__*/ createWriteContract({
    abi: positionManagerAbi,
    functionName: 'mintCallback',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writePositionManagerSafeTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: positionManagerAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writePositionManagerSetApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: positionManagerAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writePositionManagerTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: positionManagerAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link positionManagerAbi}__
 */
export const simulatePositionManager = /*#__PURE__*/ createSimulateContract({
  abi: positionManagerAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"approve"`
 */
export const simulatePositionManagerApprove =
  /*#__PURE__*/ createSimulateContract({
    abi: positionManagerAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"burn"`
 */
export const simulatePositionManagerBurn = /*#__PURE__*/ createSimulateContract(
  { abi: positionManagerAbi, functionName: 'burn' }
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"collect"`
 */
export const simulatePositionManagerCollect =
  /*#__PURE__*/ createSimulateContract({
    abi: positionManagerAbi,
    functionName: 'collect',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"mint"`
 */
export const simulatePositionManagerMint = /*#__PURE__*/ createSimulateContract(
  { abi: positionManagerAbi, functionName: 'mint' }
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"mintCallback"`
 */
export const simulatePositionManagerMintCallback =
  /*#__PURE__*/ createSimulateContract({
    abi: positionManagerAbi,
    functionName: 'mintCallback',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulatePositionManagerSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: positionManagerAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulatePositionManagerSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: positionManagerAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulatePositionManagerTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: positionManagerAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link positionManagerAbi}__
 */
export const watchPositionManagerEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: positionManagerAbi }
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link positionManagerAbi}__ and `eventName` set to `"Approval"`
 */
export const watchPositionManagerApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: positionManagerAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link positionManagerAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchPositionManagerApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: positionManagerAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link positionManagerAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchPositionManagerTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: positionManagerAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link swapRouterAbi}__
 */
export const readSwapRouter = /*#__PURE__*/ createReadContract({
  abi: swapRouterAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"poolManager"`
 */
export const readSwapRouterPoolManager = /*#__PURE__*/ createReadContract({
  abi: swapRouterAbi,
  functionName: 'poolManager',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link swapRouterAbi}__
 */
export const writeSwapRouter = /*#__PURE__*/ createWriteContract({
  abi: swapRouterAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"exactInput"`
 */
export const writeSwapRouterExactInput = /*#__PURE__*/ createWriteContract({
  abi: swapRouterAbi,
  functionName: 'exactInput',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"exactOutput"`
 */
export const writeSwapRouterExactOutput = /*#__PURE__*/ createWriteContract({
  abi: swapRouterAbi,
  functionName: 'exactOutput',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"quoteExactInput"`
 */
export const writeSwapRouterQuoteExactInput = /*#__PURE__*/ createWriteContract(
  { abi: swapRouterAbi, functionName: 'quoteExactInput' }
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"quoteExactOutput"`
 */
export const writeSwapRouterQuoteExactOutput =
  /*#__PURE__*/ createWriteContract({
    abi: swapRouterAbi,
    functionName: 'quoteExactOutput',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"swapCallback"`
 */
export const writeSwapRouterSwapCallback = /*#__PURE__*/ createWriteContract({
  abi: swapRouterAbi,
  functionName: 'swapCallback',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"swapInPool"`
 */
export const writeSwapRouterSwapInPool = /*#__PURE__*/ createWriteContract({
  abi: swapRouterAbi,
  functionName: 'swapInPool',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link swapRouterAbi}__
 */
export const simulateSwapRouter = /*#__PURE__*/ createSimulateContract({
  abi: swapRouterAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"exactInput"`
 */
export const simulateSwapRouterExactInput =
  /*#__PURE__*/ createSimulateContract({
    abi: swapRouterAbi,
    functionName: 'exactInput',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"exactOutput"`
 */
export const simulateSwapRouterExactOutput =
  /*#__PURE__*/ createSimulateContract({
    abi: swapRouterAbi,
    functionName: 'exactOutput',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"quoteExactInput"`
 */
export const simulateSwapRouterQuoteExactInput =
  /*#__PURE__*/ createSimulateContract({
    abi: swapRouterAbi,
    functionName: 'quoteExactInput',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"quoteExactOutput"`
 */
export const simulateSwapRouterQuoteExactOutput =
  /*#__PURE__*/ createSimulateContract({
    abi: swapRouterAbi,
    functionName: 'quoteExactOutput',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"swapCallback"`
 */
export const simulateSwapRouterSwapCallback =
  /*#__PURE__*/ createSimulateContract({
    abi: swapRouterAbi,
    functionName: 'swapCallback',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"swapInPool"`
 */
export const simulateSwapRouterSwapInPool =
  /*#__PURE__*/ createSimulateContract({
    abi: swapRouterAbi,
    functionName: 'swapInPool',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link swapRouterAbi}__
 */
export const watchSwapRouterEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: swapRouterAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link swapRouterAbi}__ and `eventName` set to `"Swap"`
 */
export const watchSwapRouterSwapEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: swapRouterAbi,
  eventName: 'Swap',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testLpAbi}__
 */
export const writeTestLp = /*#__PURE__*/ createWriteContract({ abi: testLpAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testLpAbi}__ and `functionName` set to `"burn"`
 */
export const writeTestLpBurn = /*#__PURE__*/ createWriteContract({
  abi: testLpAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testLpAbi}__ and `functionName` set to `"collect"`
 */
export const writeTestLpCollect = /*#__PURE__*/ createWriteContract({
  abi: testLpAbi,
  functionName: 'collect',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testLpAbi}__ and `functionName` set to `"mint"`
 */
export const writeTestLpMint = /*#__PURE__*/ createWriteContract({
  abi: testLpAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testLpAbi}__ and `functionName` set to `"mintCallback"`
 */
export const writeTestLpMintCallback = /*#__PURE__*/ createWriteContract({
  abi: testLpAbi,
  functionName: 'mintCallback',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testLpAbi}__
 */
export const simulateTestLp = /*#__PURE__*/ createSimulateContract({
  abi: testLpAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testLpAbi}__ and `functionName` set to `"burn"`
 */
export const simulateTestLpBurn = /*#__PURE__*/ createSimulateContract({
  abi: testLpAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testLpAbi}__ and `functionName` set to `"collect"`
 */
export const simulateTestLpCollect = /*#__PURE__*/ createSimulateContract({
  abi: testLpAbi,
  functionName: 'collect',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testLpAbi}__ and `functionName` set to `"mint"`
 */
export const simulateTestLpMint = /*#__PURE__*/ createSimulateContract({
  abi: testLpAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testLpAbi}__ and `functionName` set to `"mintCallback"`
 */
export const simulateTestLpMintCallback = /*#__PURE__*/ createSimulateContract({
  abi: testLpAbi,
  functionName: 'mintCallback',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testSwapAbi}__
 */
export const writeTestSwap = /*#__PURE__*/ createWriteContract({
  abi: testSwapAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testSwapAbi}__ and `functionName` set to `"swapCallback"`
 */
export const writeTestSwapSwapCallback = /*#__PURE__*/ createWriteContract({
  abi: testSwapAbi,
  functionName: 'swapCallback',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testSwapAbi}__ and `functionName` set to `"testSwap"`
 */
export const writeTestSwapTestSwap = /*#__PURE__*/ createWriteContract({
  abi: testSwapAbi,
  functionName: 'testSwap',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testSwapAbi}__
 */
export const simulateTestSwap = /*#__PURE__*/ createSimulateContract({
  abi: testSwapAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testSwapAbi}__ and `functionName` set to `"swapCallback"`
 */
export const simulateTestSwapSwapCallback =
  /*#__PURE__*/ createSimulateContract({
    abi: testSwapAbi,
    functionName: 'swapCallback',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testSwapAbi}__ and `functionName` set to `"testSwap"`
 */
export const simulateTestSwapTestSwap = /*#__PURE__*/ createSimulateContract({
  abi: testSwapAbi,
  functionName: 'testSwap',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testTokenAbi}__
 */
export const readTestToken = /*#__PURE__*/ createReadContract({
  abi: testTokenAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"allowance"`
 */
export const readTestTokenAllowance = /*#__PURE__*/ createReadContract({
  abi: testTokenAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readTestTokenBalanceOf = /*#__PURE__*/ createReadContract({
  abi: testTokenAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"decimals"`
 */
export const readTestTokenDecimals = /*#__PURE__*/ createReadContract({
  abi: testTokenAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"name"`
 */
export const readTestTokenName = /*#__PURE__*/ createReadContract({
  abi: testTokenAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"symbol"`
 */
export const readTestTokenSymbol = /*#__PURE__*/ createReadContract({
  abi: testTokenAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readTestTokenTotalSupply = /*#__PURE__*/ createReadContract({
  abi: testTokenAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testTokenAbi}__
 */
export const writeTestToken = /*#__PURE__*/ createWriteContract({
  abi: testTokenAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"approve"`
 */
export const writeTestTokenApprove = /*#__PURE__*/ createWriteContract({
  abi: testTokenAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"mint"`
 */
export const writeTestTokenMint = /*#__PURE__*/ createWriteContract({
  abi: testTokenAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const writeTestTokenTransfer = /*#__PURE__*/ createWriteContract({
  abi: testTokenAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeTestTokenTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: testTokenAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testTokenAbi}__
 */
export const simulateTestToken = /*#__PURE__*/ createSimulateContract({
  abi: testTokenAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"approve"`
 */
export const simulateTestTokenApprove = /*#__PURE__*/ createSimulateContract({
  abi: testTokenAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"mint"`
 */
export const simulateTestTokenMint = /*#__PURE__*/ createSimulateContract({
  abi: testTokenAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateTestTokenTransfer = /*#__PURE__*/ createSimulateContract({
  abi: testTokenAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateTestTokenTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: testTokenAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testTokenAbi}__
 */
export const watchTestTokenEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: testTokenAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testTokenAbi}__ and `eventName` set to `"Approval"`
 */
export const watchTestTokenApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testTokenAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testTokenAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchTestTokenTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testTokenAbi,
    eventName: 'Transfer',
  })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link debugTokenAbi}__
 */
export const useReadDebugToken = /*#__PURE__*/ createUseReadContract({
  abi: debugTokenAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadDebugTokenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: debugTokenAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadDebugTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: debugTokenAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadDebugTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: debugTokenAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"name"`
 */
export const useReadDebugTokenName = /*#__PURE__*/ createUseReadContract({
  abi: debugTokenAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadDebugTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: debugTokenAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadDebugTokenTotalSupply = /*#__PURE__*/ createUseReadContract(
  { abi: debugTokenAbi, functionName: 'totalSupply' }
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link debugTokenAbi}__
 */
export const useWriteDebugToken = /*#__PURE__*/ createUseWriteContract({
  abi: debugTokenAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteDebugTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: debugTokenAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteDebugTokenMint = /*#__PURE__*/ createUseWriteContract({
  abi: debugTokenAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteDebugTokenTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: debugTokenAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteDebugTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: debugTokenAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link debugTokenAbi}__
 */
export const useSimulateDebugToken = /*#__PURE__*/ createUseSimulateContract({
  abi: debugTokenAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateDebugTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: debugTokenAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateDebugTokenMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: debugTokenAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateDebugTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: debugTokenAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateDebugTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: debugTokenAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link debugTokenAbi}__
 */
export const useWatchDebugTokenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: debugTokenAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link debugTokenAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchDebugTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: debugTokenAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link debugTokenAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchDebugTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: debugTokenAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__
 */
export const useReadErc165 = /*#__PURE__*/ createUseReadContract({
  abi: erc165Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc165SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc165Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' }
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useReadErc721 = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadErc721GetApproved = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadErc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc721Name = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadErc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc721Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadErc721TokenUri = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWriteErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteErc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteErc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc721TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useSimulateErc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc721Approve = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc721Abi, functionName: 'approve' }
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateErc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateErc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWatchErc721Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchErc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link factoryAbi}__
 */
export const useReadFactory = /*#__PURE__*/ createUseReadContract({
  abi: factoryAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link factoryAbi}__ and `functionName` set to `"getPool"`
 */
export const useReadFactoryGetPool = /*#__PURE__*/ createUseReadContract({
  abi: factoryAbi,
  functionName: 'getPool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link factoryAbi}__ and `functionName` set to `"parameters"`
 */
export const useReadFactoryParameters = /*#__PURE__*/ createUseReadContract({
  abi: factoryAbi,
  functionName: 'parameters',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link factoryAbi}__ and `functionName` set to `"pools"`
 */
export const useReadFactoryPools = /*#__PURE__*/ createUseReadContract({
  abi: factoryAbi,
  functionName: 'pools',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link factoryAbi}__
 */
export const useWriteFactory = /*#__PURE__*/ createUseWriteContract({
  abi: factoryAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link factoryAbi}__ and `functionName` set to `"createPool"`
 */
export const useWriteFactoryCreatePool = /*#__PURE__*/ createUseWriteContract({
  abi: factoryAbi,
  functionName: 'createPool',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link factoryAbi}__
 */
export const useSimulateFactory = /*#__PURE__*/ createUseSimulateContract({
  abi: factoryAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link factoryAbi}__ and `functionName` set to `"createPool"`
 */
export const useSimulateFactoryCreatePool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: factoryAbi,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link factoryAbi}__
 */
export const useWatchFactoryEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: factoryAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link factoryAbi}__ and `eventName` set to `"PoolCreated"`
 */
export const useWatchFactoryPoolCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: factoryAbi,
    eventName: 'PoolCreated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc165Abi}__
 */
export const useReadIerc165 = /*#__PURE__*/ createUseReadContract({
  abi: ierc165Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc165SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc165Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useReadIerc20 = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useWriteIerc20 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useSimulateIerc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc20Approve = /*#__PURE__*/ createUseSimulateContract(
  { abi: ierc20Abi, functionName: 'approve' }
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc20Transfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20Abi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useWatchIerc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useReadIerc20Metadata = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc20MetadataAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20MetadataBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadIerc20MetadataDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"name"`
 */
export const useReadIerc20MetadataName = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIerc20MetadataSymbol = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc20MetadataTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useWriteIerc20Metadata = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc20MetadataApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc20MetadataTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc20MetadataTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useSimulateIerc20Metadata =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc20MetadataAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc20MetadataApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc20MetadataTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc20MetadataTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useWatchIerc20MetadataEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc20MetadataAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc20MetadataApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc20MetadataTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useReadIerc721 = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIerc721GetApproved = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIerc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useWriteIerc721 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc721TransferFrom = /*#__PURE__*/ createUseWriteContract(
  { abi: ierc721Abi, functionName: 'transferFrom' }
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useSimulateIerc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc721Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useWatchIerc721Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useReadIerc721Metadata = /*#__PURE__*/ createUseReadContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc721MetadataBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIerc721MetadataGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc721MetadataIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"name"`
 */
export const useReadIerc721MetadataName = /*#__PURE__*/ createUseReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIerc721MetadataOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc721MetadataSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIerc721MetadataSymbol = /*#__PURE__*/ createUseReadContract(
  { abi: ierc721MetadataAbi, functionName: 'symbol' }
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadIerc721MetadataTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useWriteIerc721Metadata = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc721MetadataApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc721MetadataTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useSimulateIerc721Metadata =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc721MetadataApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc721MetadataTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useWatchIerc721MetadataEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc721MetadataApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc721MetadataApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc721MetadataTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const useWriteIerc721Receiver = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721ReceiverAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const useSimulateIerc721Receiver =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc721ReceiverAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iFactoryAbi}__
 */
export const useReadIFactory = /*#__PURE__*/ createUseReadContract({
  abi: iFactoryAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iFactoryAbi}__ and `functionName` set to `"getPool"`
 */
export const useReadIFactoryGetPool = /*#__PURE__*/ createUseReadContract({
  abi: iFactoryAbi,
  functionName: 'getPool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iFactoryAbi}__ and `functionName` set to `"parameters"`
 */
export const useReadIFactoryParameters = /*#__PURE__*/ createUseReadContract({
  abi: iFactoryAbi,
  functionName: 'parameters',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iFactoryAbi}__
 */
export const useWriteIFactory = /*#__PURE__*/ createUseWriteContract({
  abi: iFactoryAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iFactoryAbi}__ and `functionName` set to `"createPool"`
 */
export const useWriteIFactoryCreatePool = /*#__PURE__*/ createUseWriteContract({
  abi: iFactoryAbi,
  functionName: 'createPool',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iFactoryAbi}__
 */
export const useSimulateIFactory = /*#__PURE__*/ createUseSimulateContract({
  abi: iFactoryAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iFactoryAbi}__ and `functionName` set to `"createPool"`
 */
export const useSimulateIFactoryCreatePool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iFactoryAbi,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iFactoryAbi}__
 */
export const useWatchIFactoryEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: iFactoryAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iFactoryAbi}__ and `eventName` set to `"PoolCreated"`
 */
export const useWatchIFactoryPoolCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iFactoryAbi,
    eventName: 'PoolCreated',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMintCallbackAbi}__
 */
export const useWriteIMintCallback = /*#__PURE__*/ createUseWriteContract({
  abi: iMintCallbackAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMintCallbackAbi}__ and `functionName` set to `"mintCallback"`
 */
export const useWriteIMintCallbackMintCallback =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMintCallbackAbi,
    functionName: 'mintCallback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMintCallbackAbi}__
 */
export const useSimulateIMintCallback = /*#__PURE__*/ createUseSimulateContract(
  { abi: iMintCallbackAbi }
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMintCallbackAbi}__ and `functionName` set to `"mintCallback"`
 */
export const useSimulateIMintCallbackMintCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMintCallbackAbi,
    functionName: 'mintCallback',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__
 */
export const useReadIPool = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"factory"`
 */
export const useReadIPoolFactory = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
  functionName: 'factory',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"fee"`
 */
export const useReadIPoolFee = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
  functionName: 'fee',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"feeGrowthGlobal0X128"`
 */
export const useReadIPoolFeeGrowthGlobal0X128 =
  /*#__PURE__*/ createUseReadContract({
    abi: iPoolAbi,
    functionName: 'feeGrowthGlobal0X128',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"feeGrowthGlobal1X128"`
 */
export const useReadIPoolFeeGrowthGlobal1X128 =
  /*#__PURE__*/ createUseReadContract({
    abi: iPoolAbi,
    functionName: 'feeGrowthGlobal1X128',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"getPosition"`
 */
export const useReadIPoolGetPosition = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
  functionName: 'getPosition',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"liquidity"`
 */
export const useReadIPoolLiquidity = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
  functionName: 'liquidity',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"sqrtPriceX96"`
 */
export const useReadIPoolSqrtPriceX96 = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
  functionName: 'sqrtPriceX96',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"tick"`
 */
export const useReadIPoolTick = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
  functionName: 'tick',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"tickLower"`
 */
export const useReadIPoolTickLower = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
  functionName: 'tickLower',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"tickUpper"`
 */
export const useReadIPoolTickUpper = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
  functionName: 'tickUpper',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"token0"`
 */
export const useReadIPoolToken0 = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
  functionName: 'token0',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"token1"`
 */
export const useReadIPoolToken1 = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
  functionName: 'token1',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPoolAbi}__
 */
export const useWriteIPool = /*#__PURE__*/ createUseWriteContract({
  abi: iPoolAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteIPoolBurn = /*#__PURE__*/ createUseWriteContract({
  abi: iPoolAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"collect"`
 */
export const useWriteIPoolCollect = /*#__PURE__*/ createUseWriteContract({
  abi: iPoolAbi,
  functionName: 'collect',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteIPoolInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: iPoolAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteIPoolMint = /*#__PURE__*/ createUseWriteContract({
  abi: iPoolAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"swap"`
 */
export const useWriteIPoolSwap = /*#__PURE__*/ createUseWriteContract({
  abi: iPoolAbi,
  functionName: 'swap',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPoolAbi}__
 */
export const useSimulateIPool = /*#__PURE__*/ createUseSimulateContract({
  abi: iPoolAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateIPoolBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: iPoolAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"collect"`
 */
export const useSimulateIPoolCollect = /*#__PURE__*/ createUseSimulateContract({
  abi: iPoolAbi,
  functionName: 'collect',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateIPoolInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPoolAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateIPoolMint = /*#__PURE__*/ createUseSimulateContract({
  abi: iPoolAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"swap"`
 */
export const useSimulateIPoolSwap = /*#__PURE__*/ createUseSimulateContract({
  abi: iPoolAbi,
  functionName: 'swap',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iPoolAbi}__
 */
export const useWatchIPoolEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: iPoolAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iPoolAbi}__ and `eventName` set to `"Burn"`
 */
export const useWatchIPoolBurnEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: iPoolAbi, eventName: 'Burn' }
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iPoolAbi}__ and `eventName` set to `"Collect"`
 */
export const useWatchIPoolCollectEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iPoolAbi,
    eventName: 'Collect',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iPoolAbi}__ and `eventName` set to `"Mint"`
 */
export const useWatchIPoolMintEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: iPoolAbi, eventName: 'Mint' }
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iPoolAbi}__ and `eventName` set to `"Swap"`
 */
export const useWatchIPoolSwapEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: iPoolAbi, eventName: 'Swap' }
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolManagerAbi}__
 */
export const useReadIPoolManager = /*#__PURE__*/ createUseReadContract({
  abi: iPoolManagerAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"getAllPools"`
 */
export const useReadIPoolManagerGetAllPools =
  /*#__PURE__*/ createUseReadContract({
    abi: iPoolManagerAbi,
    functionName: 'getAllPools',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"getPairs"`
 */
export const useReadIPoolManagerGetPairs = /*#__PURE__*/ createUseReadContract({
  abi: iPoolManagerAbi,
  functionName: 'getPairs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"getPool"`
 */
export const useReadIPoolManagerGetPool = /*#__PURE__*/ createUseReadContract({
  abi: iPoolManagerAbi,
  functionName: 'getPool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"parameters"`
 */
export const useReadIPoolManagerParameters =
  /*#__PURE__*/ createUseReadContract({
    abi: iPoolManagerAbi,
    functionName: 'parameters',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPoolManagerAbi}__
 */
export const useWriteIPoolManager = /*#__PURE__*/ createUseWriteContract({
  abi: iPoolManagerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"createAndInitializePoolIfNecessary"`
 */
export const useWriteIPoolManagerCreateAndInitializePoolIfNecessary =
  /*#__PURE__*/ createUseWriteContract({
    abi: iPoolManagerAbi,
    functionName: 'createAndInitializePoolIfNecessary',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"createPool"`
 */
export const useWriteIPoolManagerCreatePool =
  /*#__PURE__*/ createUseWriteContract({
    abi: iPoolManagerAbi,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPoolManagerAbi}__
 */
export const useSimulateIPoolManager = /*#__PURE__*/ createUseSimulateContract({
  abi: iPoolManagerAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"createAndInitializePoolIfNecessary"`
 */
export const useSimulateIPoolManagerCreateAndInitializePoolIfNecessary =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPoolManagerAbi,
    functionName: 'createAndInitializePoolIfNecessary',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"createPool"`
 */
export const useSimulateIPoolManagerCreatePool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPoolManagerAbi,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iPoolManagerAbi}__
 */
export const useWatchIPoolManagerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iPoolManagerAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iPoolManagerAbi}__ and `eventName` set to `"PoolCreated"`
 */
export const useWatchIPoolManagerPoolCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iPoolManagerAbi,
    eventName: 'PoolCreated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPositionManagerAbi}__
 */
export const useReadIPositionManager = /*#__PURE__*/ createUseReadContract({
  abi: iPositionManagerAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIPositionManagerBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: iPositionManagerAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"getAllPositions"`
 */
export const useReadIPositionManagerGetAllPositions =
  /*#__PURE__*/ createUseReadContract({
    abi: iPositionManagerAbi,
    functionName: 'getAllPositions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIPositionManagerGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: iPositionManagerAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIPositionManagerIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: iPositionManagerAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIPositionManagerOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: iPositionManagerAbi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIPositionManagerSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: iPositionManagerAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPositionManagerAbi}__
 */
export const useWriteIPositionManager = /*#__PURE__*/ createUseWriteContract({
  abi: iPositionManagerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIPositionManagerApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: iPositionManagerAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteIPositionManagerBurn =
  /*#__PURE__*/ createUseWriteContract({
    abi: iPositionManagerAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"collect"`
 */
export const useWriteIPositionManagerCollect =
  /*#__PURE__*/ createUseWriteContract({
    abi: iPositionManagerAbi,
    functionName: 'collect',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteIPositionManagerMint =
  /*#__PURE__*/ createUseWriteContract({
    abi: iPositionManagerAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"mintCallback"`
 */
export const useWriteIPositionManagerMintCallback =
  /*#__PURE__*/ createUseWriteContract({
    abi: iPositionManagerAbi,
    functionName: 'mintCallback',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIPositionManagerSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: iPositionManagerAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIPositionManagerSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: iPositionManagerAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIPositionManagerTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: iPositionManagerAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__
 */
export const useSimulateIPositionManager =
  /*#__PURE__*/ createUseSimulateContract({ abi: iPositionManagerAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIPositionManagerApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateIPositionManagerBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"collect"`
 */
export const useSimulateIPositionManagerCollect =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'collect',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateIPositionManagerMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"mintCallback"`
 */
export const useSimulateIPositionManagerMintCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'mintCallback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIPositionManagerSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIPositionManagerSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIPositionManagerTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iPositionManagerAbi}__
 */
export const useWatchIPositionManagerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iPositionManagerAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iPositionManagerAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIPositionManagerApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iPositionManagerAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iPositionManagerAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIPositionManagerApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iPositionManagerAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iPositionManagerAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIPositionManagerTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iPositionManagerAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSwapCallbackAbi}__
 */
export const useWriteISwapCallback = /*#__PURE__*/ createUseWriteContract({
  abi: iSwapCallbackAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSwapCallbackAbi}__ and `functionName` set to `"swapCallback"`
 */
export const useWriteISwapCallbackSwapCallback =
  /*#__PURE__*/ createUseWriteContract({
    abi: iSwapCallbackAbi,
    functionName: 'swapCallback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSwapCallbackAbi}__
 */
export const useSimulateISwapCallback = /*#__PURE__*/ createUseSimulateContract(
  { abi: iSwapCallbackAbi }
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSwapCallbackAbi}__ and `functionName` set to `"swapCallback"`
 */
export const useSimulateISwapCallbackSwapCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iSwapCallbackAbi,
    functionName: 'swapCallback',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSwapRouterAbi}__
 */
export const useWriteISwapRouter = /*#__PURE__*/ createUseWriteContract({
  abi: iSwapRouterAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"exactInput"`
 */
export const useWriteISwapRouterExactInput =
  /*#__PURE__*/ createUseWriteContract({
    abi: iSwapRouterAbi,
    functionName: 'exactInput',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"exactOutput"`
 */
export const useWriteISwapRouterExactOutput =
  /*#__PURE__*/ createUseWriteContract({
    abi: iSwapRouterAbi,
    functionName: 'exactOutput',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"quoteExactInput"`
 */
export const useWriteISwapRouterQuoteExactInput =
  /*#__PURE__*/ createUseWriteContract({
    abi: iSwapRouterAbi,
    functionName: 'quoteExactInput',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"quoteExactOutput"`
 */
export const useWriteISwapRouterQuoteExactOutput =
  /*#__PURE__*/ createUseWriteContract({
    abi: iSwapRouterAbi,
    functionName: 'quoteExactOutput',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"swapCallback"`
 */
export const useWriteISwapRouterSwapCallback =
  /*#__PURE__*/ createUseWriteContract({
    abi: iSwapRouterAbi,
    functionName: 'swapCallback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSwapRouterAbi}__
 */
export const useSimulateISwapRouter = /*#__PURE__*/ createUseSimulateContract({
  abi: iSwapRouterAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"exactInput"`
 */
export const useSimulateISwapRouterExactInput =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iSwapRouterAbi,
    functionName: 'exactInput',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"exactOutput"`
 */
export const useSimulateISwapRouterExactOutput =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iSwapRouterAbi,
    functionName: 'exactOutput',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"quoteExactInput"`
 */
export const useSimulateISwapRouterQuoteExactInput =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iSwapRouterAbi,
    functionName: 'quoteExactInput',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"quoteExactOutput"`
 */
export const useSimulateISwapRouterQuoteExactOutput =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iSwapRouterAbi,
    functionName: 'quoteExactOutput',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"swapCallback"`
 */
export const useSimulateISwapRouterSwapCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iSwapRouterAbi,
    functionName: 'swapCallback',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iSwapRouterAbi}__
 */
export const useWatchISwapRouterEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iSwapRouterAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iSwapRouterAbi}__ and `eventName` set to `"Swap"`
 */
export const useWatchISwapRouterSwapEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iSwapRouterAbi,
    eventName: 'Swap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__
 */
export const useReadPool = /*#__PURE__*/ createUseReadContract({ abi: poolAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"factory"`
 */
export const useReadPoolFactory = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'factory',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"fee"`
 */
export const useReadPoolFee = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'fee',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"feeGrowthGlobal0X128"`
 */
export const useReadPoolFeeGrowthGlobal0X128 =
  /*#__PURE__*/ createUseReadContract({
    abi: poolAbi,
    functionName: 'feeGrowthGlobal0X128',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"feeGrowthGlobal1X128"`
 */
export const useReadPoolFeeGrowthGlobal1X128 =
  /*#__PURE__*/ createUseReadContract({
    abi: poolAbi,
    functionName: 'feeGrowthGlobal1X128',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"getPosition"`
 */
export const useReadPoolGetPosition = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'getPosition',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"liquidity"`
 */
export const useReadPoolLiquidity = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'liquidity',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"positions"`
 */
export const useReadPoolPositions = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'positions',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"sqrtPriceX96"`
 */
export const useReadPoolSqrtPriceX96 = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'sqrtPriceX96',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"tick"`
 */
export const useReadPoolTick = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'tick',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"tickLower"`
 */
export const useReadPoolTickLower = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'tickLower',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"tickUpper"`
 */
export const useReadPoolTickUpper = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'tickUpper',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"token0"`
 */
export const useReadPoolToken0 = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'token0',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"token1"`
 */
export const useReadPoolToken1 = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'token1',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__
 */
export const useWritePool = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"burn"`
 */
export const useWritePoolBurn = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"collect"`
 */
export const useWritePoolCollect = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'collect',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"initialize"`
 */
export const useWritePoolInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"mint"`
 */
export const useWritePoolMint = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"swap"`
 */
export const useWritePoolSwap = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'swap',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__
 */
export const useSimulatePool = /*#__PURE__*/ createUseSimulateContract({
  abi: poolAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulatePoolBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: poolAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"collect"`
 */
export const useSimulatePoolCollect = /*#__PURE__*/ createUseSimulateContract({
  abi: poolAbi,
  functionName: 'collect',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulatePoolInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulatePoolMint = /*#__PURE__*/ createUseSimulateContract({
  abi: poolAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"swap"`
 */
export const useSimulatePoolSwap = /*#__PURE__*/ createUseSimulateContract({
  abi: poolAbi,
  functionName: 'swap',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__
 */
export const useWatchPoolEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: poolAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"Burn"`
 */
export const useWatchPoolBurnEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: poolAbi,
  eventName: 'Burn',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"Collect"`
 */
export const useWatchPoolCollectEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: poolAbi,
    eventName: 'Collect',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"Mint"`
 */
export const useWatchPoolMintEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: poolAbi,
  eventName: 'Mint',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"Swap"`
 */
export const useWatchPoolSwapEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: poolAbi,
  eventName: 'Swap',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolManagerAbi}__
 */
export const useReadPoolManager = /*#__PURE__*/ createUseReadContract({
  abi: poolManagerAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"getAllPools"`
 */
export const useReadPoolManagerGetAllPools =
  /*#__PURE__*/ createUseReadContract({
    abi: poolManagerAbi,
    functionName: 'getAllPools',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"getPairs"`
 */
export const useReadPoolManagerGetPairs = /*#__PURE__*/ createUseReadContract({
  abi: poolManagerAbi,
  functionName: 'getPairs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"getPool"`
 */
export const useReadPoolManagerGetPool = /*#__PURE__*/ createUseReadContract({
  abi: poolManagerAbi,
  functionName: 'getPool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"pairs"`
 */
export const useReadPoolManagerPairs = /*#__PURE__*/ createUseReadContract({
  abi: poolManagerAbi,
  functionName: 'pairs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"parameters"`
 */
export const useReadPoolManagerParameters = /*#__PURE__*/ createUseReadContract(
  { abi: poolManagerAbi, functionName: 'parameters' }
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"pools"`
 */
export const useReadPoolManagerPools = /*#__PURE__*/ createUseReadContract({
  abi: poolManagerAbi,
  functionName: 'pools',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolManagerAbi}__
 */
export const useWritePoolManager = /*#__PURE__*/ createUseWriteContract({
  abi: poolManagerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"createAndInitializePoolIfNecessary"`
 */
export const useWritePoolManagerCreateAndInitializePoolIfNecessary =
  /*#__PURE__*/ createUseWriteContract({
    abi: poolManagerAbi,
    functionName: 'createAndInitializePoolIfNecessary',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"createPool"`
 */
export const useWritePoolManagerCreatePool =
  /*#__PURE__*/ createUseWriteContract({
    abi: poolManagerAbi,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolManagerAbi}__
 */
export const useSimulatePoolManager = /*#__PURE__*/ createUseSimulateContract({
  abi: poolManagerAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"createAndInitializePoolIfNecessary"`
 */
export const useSimulatePoolManagerCreateAndInitializePoolIfNecessary =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolManagerAbi,
    functionName: 'createAndInitializePoolIfNecessary',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"createPool"`
 */
export const useSimulatePoolManagerCreatePool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolManagerAbi,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolManagerAbi}__
 */
export const useWatchPoolManagerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: poolManagerAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolManagerAbi}__ and `eventName` set to `"PoolCreated"`
 */
export const useWatchPoolManagerPoolCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: poolManagerAbi,
    eventName: 'PoolCreated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__
 */
export const useReadPositionManager = /*#__PURE__*/ createUseReadContract({
  abi: positionManagerAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadPositionManagerBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: positionManagerAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"getAllPositions"`
 */
export const useReadPositionManagerGetAllPositions =
  /*#__PURE__*/ createUseReadContract({
    abi: positionManagerAbi,
    functionName: 'getAllPositions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadPositionManagerGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: positionManagerAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"getSender"`
 */
export const useReadPositionManagerGetSender =
  /*#__PURE__*/ createUseReadContract({
    abi: positionManagerAbi,
    functionName: 'getSender',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadPositionManagerIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: positionManagerAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"name"`
 */
export const useReadPositionManagerName = /*#__PURE__*/ createUseReadContract({
  abi: positionManagerAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadPositionManagerOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: positionManagerAbi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"poolManager"`
 */
export const useReadPositionManagerPoolManager =
  /*#__PURE__*/ createUseReadContract({
    abi: positionManagerAbi,
    functionName: 'poolManager',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"positions"`
 */
export const useReadPositionManagerPositions =
  /*#__PURE__*/ createUseReadContract({
    abi: positionManagerAbi,
    functionName: 'positions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadPositionManagerSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: positionManagerAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadPositionManagerSymbol = /*#__PURE__*/ createUseReadContract(
  { abi: positionManagerAbi, functionName: 'symbol' }
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadPositionManagerTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: positionManagerAbi,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link positionManagerAbi}__
 */
export const useWritePositionManager = /*#__PURE__*/ createUseWriteContract({
  abi: positionManagerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"approve"`
 */
export const useWritePositionManagerApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: positionManagerAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"burn"`
 */
export const useWritePositionManagerBurn = /*#__PURE__*/ createUseWriteContract(
  { abi: positionManagerAbi, functionName: 'burn' }
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"collect"`
 */
export const useWritePositionManagerCollect =
  /*#__PURE__*/ createUseWriteContract({
    abi: positionManagerAbi,
    functionName: 'collect',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"mint"`
 */
export const useWritePositionManagerMint = /*#__PURE__*/ createUseWriteContract(
  { abi: positionManagerAbi, functionName: 'mint' }
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"mintCallback"`
 */
export const useWritePositionManagerMintCallback =
  /*#__PURE__*/ createUseWriteContract({
    abi: positionManagerAbi,
    functionName: 'mintCallback',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWritePositionManagerSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: positionManagerAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWritePositionManagerSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: positionManagerAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWritePositionManagerTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: positionManagerAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link positionManagerAbi}__
 */
export const useSimulatePositionManager =
  /*#__PURE__*/ createUseSimulateContract({ abi: positionManagerAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulatePositionManagerApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: positionManagerAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulatePositionManagerBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: positionManagerAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"collect"`
 */
export const useSimulatePositionManagerCollect =
  /*#__PURE__*/ createUseSimulateContract({
    abi: positionManagerAbi,
    functionName: 'collect',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulatePositionManagerMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: positionManagerAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"mintCallback"`
 */
export const useSimulatePositionManagerMintCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: positionManagerAbi,
    functionName: 'mintCallback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulatePositionManagerSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: positionManagerAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulatePositionManagerSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: positionManagerAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulatePositionManagerTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: positionManagerAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link positionManagerAbi}__
 */
export const useWatchPositionManagerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: positionManagerAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link positionManagerAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchPositionManagerApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: positionManagerAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link positionManagerAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchPositionManagerApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: positionManagerAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link positionManagerAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchPositionManagerTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: positionManagerAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link swapRouterAbi}__
 */
export const useReadSwapRouter = /*#__PURE__*/ createUseReadContract({
  abi: swapRouterAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"poolManager"`
 */
export const useReadSwapRouterPoolManager = /*#__PURE__*/ createUseReadContract(
  { abi: swapRouterAbi, functionName: 'poolManager' }
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouterAbi}__
 */
export const useWriteSwapRouter = /*#__PURE__*/ createUseWriteContract({
  abi: swapRouterAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"exactInput"`
 */
export const useWriteSwapRouterExactInput =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouterAbi,
    functionName: 'exactInput',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"exactOutput"`
 */
export const useWriteSwapRouterExactOutput =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouterAbi,
    functionName: 'exactOutput',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"quoteExactInput"`
 */
export const useWriteSwapRouterQuoteExactInput =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouterAbi,
    functionName: 'quoteExactInput',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"quoteExactOutput"`
 */
export const useWriteSwapRouterQuoteExactOutput =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouterAbi,
    functionName: 'quoteExactOutput',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"swapCallback"`
 */
export const useWriteSwapRouterSwapCallback =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouterAbi,
    functionName: 'swapCallback',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"swapInPool"`
 */
export const useWriteSwapRouterSwapInPool =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouterAbi,
    functionName: 'swapInPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouterAbi}__
 */
export const useSimulateSwapRouter = /*#__PURE__*/ createUseSimulateContract({
  abi: swapRouterAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"exactInput"`
 */
export const useSimulateSwapRouterExactInput =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouterAbi,
    functionName: 'exactInput',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"exactOutput"`
 */
export const useSimulateSwapRouterExactOutput =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouterAbi,
    functionName: 'exactOutput',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"quoteExactInput"`
 */
export const useSimulateSwapRouterQuoteExactInput =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouterAbi,
    functionName: 'quoteExactInput',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"quoteExactOutput"`
 */
export const useSimulateSwapRouterQuoteExactOutput =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouterAbi,
    functionName: 'quoteExactOutput',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"swapCallback"`
 */
export const useSimulateSwapRouterSwapCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouterAbi,
    functionName: 'swapCallback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"swapInPool"`
 */
export const useSimulateSwapRouterSwapInPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouterAbi,
    functionName: 'swapInPool',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link swapRouterAbi}__
 */
export const useWatchSwapRouterEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: swapRouterAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link swapRouterAbi}__ and `eventName` set to `"Swap"`
 */
export const useWatchSwapRouterSwapEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: swapRouterAbi,
    eventName: 'Swap',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testLpAbi}__
 */
export const useWriteTestLp = /*#__PURE__*/ createUseWriteContract({
  abi: testLpAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testLpAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteTestLpBurn = /*#__PURE__*/ createUseWriteContract({
  abi: testLpAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testLpAbi}__ and `functionName` set to `"collect"`
 */
export const useWriteTestLpCollect = /*#__PURE__*/ createUseWriteContract({
  abi: testLpAbi,
  functionName: 'collect',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testLpAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteTestLpMint = /*#__PURE__*/ createUseWriteContract({
  abi: testLpAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testLpAbi}__ and `functionName` set to `"mintCallback"`
 */
export const useWriteTestLpMintCallback = /*#__PURE__*/ createUseWriteContract({
  abi: testLpAbi,
  functionName: 'mintCallback',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testLpAbi}__
 */
export const useSimulateTestLp = /*#__PURE__*/ createUseSimulateContract({
  abi: testLpAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testLpAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateTestLpBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: testLpAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testLpAbi}__ and `functionName` set to `"collect"`
 */
export const useSimulateTestLpCollect = /*#__PURE__*/ createUseSimulateContract(
  { abi: testLpAbi, functionName: 'collect' }
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testLpAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateTestLpMint = /*#__PURE__*/ createUseSimulateContract({
  abi: testLpAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testLpAbi}__ and `functionName` set to `"mintCallback"`
 */
export const useSimulateTestLpMintCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testLpAbi,
    functionName: 'mintCallback',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testSwapAbi}__
 */
export const useWriteTestSwap = /*#__PURE__*/ createUseWriteContract({
  abi: testSwapAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testSwapAbi}__ and `functionName` set to `"swapCallback"`
 */
export const useWriteTestSwapSwapCallback =
  /*#__PURE__*/ createUseWriteContract({
    abi: testSwapAbi,
    functionName: 'swapCallback',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testSwapAbi}__ and `functionName` set to `"testSwap"`
 */
export const useWriteTestSwapTestSwap = /*#__PURE__*/ createUseWriteContract({
  abi: testSwapAbi,
  functionName: 'testSwap',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testSwapAbi}__
 */
export const useSimulateTestSwap = /*#__PURE__*/ createUseSimulateContract({
  abi: testSwapAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testSwapAbi}__ and `functionName` set to `"swapCallback"`
 */
export const useSimulateTestSwapSwapCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testSwapAbi,
    functionName: 'swapCallback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testSwapAbi}__ and `functionName` set to `"testSwap"`
 */
export const useSimulateTestSwapTestSwap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testSwapAbi,
    functionName: 'testSwap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testTokenAbi}__
 */
export const useReadTestToken = /*#__PURE__*/ createUseReadContract({
  abi: testTokenAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadTestTokenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: testTokenAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadTestTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: testTokenAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadTestTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: testTokenAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"name"`
 */
export const useReadTestTokenName = /*#__PURE__*/ createUseReadContract({
  abi: testTokenAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadTestTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: testTokenAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadTestTokenTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: testTokenAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testTokenAbi}__
 */
export const useWriteTestToken = /*#__PURE__*/ createUseWriteContract({
  abi: testTokenAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteTestTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: testTokenAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteTestTokenMint = /*#__PURE__*/ createUseWriteContract({
  abi: testTokenAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteTestTokenTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: testTokenAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteTestTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: testTokenAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testTokenAbi}__
 */
export const useSimulateTestToken = /*#__PURE__*/ createUseSimulateContract({
  abi: testTokenAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateTestTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testTokenAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateTestTokenMint = /*#__PURE__*/ createUseSimulateContract(
  { abi: testTokenAbi, functionName: 'mint' }
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateTestTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testTokenAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateTestTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testTokenAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testTokenAbi}__
 */
export const useWatchTestTokenEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: testTokenAbi }
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testTokenAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchTestTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testTokenAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testTokenAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchTestTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testTokenAbi,
    eventName: 'Transfer',
  })
