declare module "traceparent" {
    interface TraceParentSettings {
        transactionSampleRate: number;
    }

    class TraceParent {
        constructor(buffer: Buffer);

        static fromString(header: string): TraceParent;
        static startOrResume(parent: null | undefined | TraceParent | string, settings: TraceParentSettings): TraceParent;

        recorded: boolean;
        traceId: string;
        id: string;
        parentId: string | undefined;
        flags: string;
        version: string;

        child(): TraceParent;
        toString(): string;
        ensureParentId(): string;
    }
    
    export = TraceParent;
}