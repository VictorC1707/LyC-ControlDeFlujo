const std = @import("std");

const TimeError = error{ PerformanceCounterFrequencyFailed, PerformanceCounterFailed };

fn queryPerformanceFrequency() !u64 {
    var perf_freq: std.os.windows.LARGE_INTEGER = undefined;
    if (!std.os.windows.ntdll.RtlQueryPerformanceFrequency(&perf_freq).toBool()) {
        return TimeError.PerformanceCounterFrequencyFailed;
    }
    return @intCast(perf_freq);
}

fn queryPerformanceCounter() !u64 {
    var perf_cnt: std.os.windows.LARGE_INTEGER = undefined;
    if (!std.os.windows.ntdll.RtlQueryPerformanceCounter(&perf_cnt).toBool()) {
        return TimeError.PerformanceCounterFailed;
    }
    return @intCast(perf_cnt);
}

pub fn main(init: std.process.Init) !void {
    const n: usize = 200;
    const seed: u64 = 1505171219;

    var debug_allocator: std.heap.DebugAllocator(.{ .enable_memory_limit = true }) = .init;
    debug_allocator.backing_allocator = init.gpa;
    const allocator = debug_allocator.allocator();

    const a = try allocator.alloc(f64, n);
    defer allocator.free(a);
    const b = try allocator.alloc(f64, n);
    defer allocator.free(b);
    const c = try allocator.alloc(f64, n);
    defer allocator.free(c);

    const mem_pico_bytes = debug_allocator.total_requested_bytes;

    var r_state: u64 = seed;

    var idx: usize = 0;
    while (idx < n) : (idx += 1) {
        // a[i]
        r_state = (r_state *% 1664525) +% 1013904223;
        const r_val_a = @as(f64, @floatFromInt(r_state & 0xFFFFFFFF)) / 4294967295.0;
        var val_a = -100.0 + (r_val_a * 200.0);
        if (val_a == 0.0) val_a = 1.0;
        a[idx] = val_a;

        // b[i]
        r_state = (r_state *% 1664525) +% 1013904223;
        const r_val_b = @as(f64, @floatFromInt(r_state & 0xFFFFFFFF)) / 4294967295.0;
        b[idx] = -100.0 + (r_val_b * 200.0);

        // c[i]
        r_state = (r_state *% 1664525) +% 1013904223;
        const r_val_c = @as(f64, @floatFromInt(r_state & 0xFFFFFFFF)) / 4294967295.0;
        c[idx] = -100.0 + (r_val_c * 200.0);
    }

    var suma_real: f64 = 0.0;
    var suma_imag: f64 = 0.0;

    const perf_freq = try queryPerformanceFrequency();
    const tiempo_inicio = try queryPerformanceCounter();

    var i: usize = 0;
    while (i < n) : (i += 1) {
        const ai = a[i];
        const bi = b[i];
        const ci = c[i];
        const disc = bi * bi - 4.0 * ai * ci;

        if (disc >= 0.0) {
            const sqrt_disc = @sqrt(disc);
            const r1 = (-bi + sqrt_disc) / (2.0 * ai);
            const r2 = (-bi - sqrt_disc) / (2.0 * ai);
            suma_real += r1 + r2;
        } else {
            const parte_real = -bi / (2.0 * ai);
            const parte_imag = @sqrt(-disc) / (2.0 * ai);
            suma_real += 2.0 * parte_real;
            suma_imag += 2.0 * parte_imag;
        }
    }

    const tiempo_fin = try queryPerformanceCounter();
    const tiempo_delta = tiempo_fin - tiempo_inicio;
    const tiempo_total_ns = @as(f64, @floatFromInt(tiempo_delta)) * 1_000_000_000.0 / @as(f64, @floatFromInt(perf_freq));
    const tiempo_total_ms = tiempo_total_ns / 1_000_000.0;

    const mem_pico_mb = @as(f64, @floatFromInt(mem_pico_bytes)) / (1024.0 * 1024.0);

    std.debug.print("=== BENCHMARK ZIG (ECUACION 2° GRADO, n={d}) ===\n", .{n});
    std.debug.print("Suma Real:     {d:.6}\n", .{suma_real});
    std.debug.print("Suma Imag:     {d:.6}\n", .{suma_imag});
    std.debug.print("Tiempo:        {d:.4} ms\n", .{tiempo_total_ms});
    std.debug.print("Memoria pico:  {d:.6} MB\n", .{mem_pico_mb});
}
