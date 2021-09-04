#!/usr/bin/env node
import { program } from "commander";

program
	.version("1.0.0")
	.command("key", "Manage API Key -- https://normics.com")
	.command("check", "Check coin price info");

program.parse(process.argv);
