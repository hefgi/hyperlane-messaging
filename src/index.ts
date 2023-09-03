#!/usr/bin/env npx ts-node --esm
import { HyperlaneMessaging } from './hyperlane-messaging.ts';

export function index(): Promise<any> {
  return HyperlaneMessaging();
};

index();